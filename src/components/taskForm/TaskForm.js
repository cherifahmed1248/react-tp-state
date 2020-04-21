import React, { useState, useRef, memo } from "react"
import './TaskForm.css'
function TaskForm({ addTask }) {
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState(0)
  const [type, setType] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const inputTitle = useRef(null)
  const handleAddTask = () => {
    addTask(title, duration, type, date, description)
    inputTitle.current.focus()
    setTitle("")
    setDuration(0)
    setType("")
    setDate("0")
    setDescription("")
  }
  const handleTitle = e => setTitle(e.target.value)

  return (
    <div className="task-form">
      <div className="details">
        <input
          type="text"
          name="title"
          value={title}
          ref={inputTitle}
          onChange={handleTitle}
        />
        <input
          type="number"
          value={duration}
          name="duration"
          onChange={e => setDuration(e.target.value)}
        />
        <div>
          <input
            type="text"
            value={type}
            name="type"
            onChange={e => setType(e.target.value)}
          />
          <input
            type="date"
            value={date}
            name="date"
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div>
          <textarea
            value={description}
            name="description"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="button" onClick={handleAddTask}>
        Add a task
      </button>
    </div>
  )
}
export default memo(TaskForm)