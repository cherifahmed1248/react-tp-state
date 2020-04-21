import React, { useState, useCallback } from "react"
import './App.css';
import TaskForm from './components/taskForm';
import TasksList from './components/TasksList/TasksList';


function App() {

  let loading = false

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Learn html",
      duration: 60,
      date: "2020-05-01",
      type: "Langage de programmation",
      description: "Le HyperText Markup Language, généralement abrégé HTML ou dans sa dernière version HTML5, est le langage de balisage conçu pour représenter les pages web. C’est un langage permettant d’écrire de l’hypertexte",

    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
      date: "2020-06-21",
      type: "Langage de programmation",
      description: "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état."
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
      date: "2020-09-08",
      type: "Langage de programmation",
      description: "Node.js est une plateforme logicielle libre en JavaScript orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS."
    }
  ])

  const [isVisible, setIsVisible] = useState(true)



  const addTask = (title, duration, type, date, description) => {
    setTasks(previousTasks => [
      ...previousTasks,
      { id: previousTasks.length + 1, title, duration: Number(duration), type, date, description }
    ])
  }

  const updateTask = (id, title, duration, date, type, description) => {
    const newTasks = tasks.map(task => task.id === id ? ({ id, title, duration, date, type, description }) : task)
    setTasks(newTasks)
  }
  //to use after to explain callback and memo
  const memoizedCallback = useCallback(addTask, [])

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="app">
      <div className="toggle">
        <button onClick={toggleVisibility}>Toggle visibility</button>
      </div>
      {loading && <div>Loading ... </div>}
      {!loading && (
        <div>
          <TaskForm addTask={memoizedCallback} />

          {isVisible && <TasksList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}

          />}

        </div>
      )}
    </div>
  )
}

export default App;
