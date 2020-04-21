import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Task.css"
export default function Task({
  id,
  title,
  duration,
  date,
  type,
  description,
  deleteTask,
  updateTask
}) {
  const [updateMode, setUpdateMode] = useState(false)
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const [durationToUpdate, setDurationToUpdate] = useState(duration)
  const [dateToUpdate, setDateToUpdate] = useState(date)
  const [typeToUpdate, setTypeToUpdate] = useState(type)
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(description)
  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate, durationToUpdate, dateToUpdate, typeToUpdate, descriptionToUpdate)
    setUpdateMode(false)
  }
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div>
            <div className="title">
              {title} ({duration} mn)
            </div>
            <div className="type">
              {type} ( {date} )
            </div>
            <div className="description">
              description: {description}
            </div>
          </div>
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>delete</button>

              <button onClick={() => setUpdateMode(true)}>update</button>
            </div>
          </div>
        </>
      ) : (
          <div>
            <div className="details">
              <div>
                <input
                  type="text"
                  name="title"
                  value={titleToUpdate}
                  onChange={e => setTitleToUpdate(e.target.value)}
                />
                <input
                  type="number"
                  value={durationToUpdate}
                  name="duration"
                  onChange={e => setDurationToUpdate(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={typeToUpdate}
                  name="type"
                  onChange={e => setTypeToUpdate(e.target.value)}
                />
                <input
                  type="date"
                  value={dateToUpdate}
                  name="date"
                  onChange={e => setDateToUpdate(e.target.value)}
                />
              </div>

              <div>
                <textarea
                  value={descriptionToUpdate}
                  name="description"
                  onChange={e => setDescriptionToUpdate(e.target.value)}
                ></textarea>
              </div>
            </div>

            <button className="button" onClick={handleUpdateTask}>
              Update a task
            </button>

          </div>
        )}
    </div>
  )
}
Task.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
}

Task.defaultProps = {
  duration: 30
}
