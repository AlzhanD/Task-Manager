import React, { useState } from 'react'
import './main.scss'

const TaskItem = (props) => {
  const [editingMode, setEditingMode] = useState(false)
  const [value, setValue] = useState(props.title)
  const editTitle = () => {
    setEditingMode(false)
    props.taskNameUpdate(value, props.status, props.taskId)
  }
  const deleteTask = () => {
    props.taskDelete(props.taskId)
  }
  return (
    <div className="flex justify-between content-between">
      {editingMode ? (
        <div className="taskItem">
          <button
            type="button"
            className="btnClass font-serif text-lg mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
            onClick={editTitle}
          >
            Save
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="text-black bg-red-200 placeholder-blue-500 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg appearance-none leading-normal"
          />
        </div>
      ) : (
        <div className="taskItem">
          <button
            type="button"
            className="btnClass font-serif text-lg mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
            onClick={() => setEditingMode(true)}
          >
            Edit
          </button>
          {props.title}
        </div>
      )}
      <div>
        {props.status === 'new' ? (
          <button
            type="button"
            className="btnClass font-serif text-lg mr-10 ml-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-000 text-black font-bold py-1 px-1 rounded"
            onClick={() => props.updateStatus('in progress', props.taskId)}
          >
            In progress
          </button>
        ) : (
          ''
        )}
        {props.status === 'in progress' ? (
          <div>
            <button
              type="button"
              className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
              onClick={() => props.updateStatus('blocked', props.taskId)}
            >
              Block
            </button>
            <button
              type="button"
              className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
              onClick={() => props.updateStatus('done', props.taskId)}
            >
              Done
            </button>
          </div>
        ) : (
          ''
        )}
        {props.status === 'blocked' ? (
          <div>
            <button
              type="button"
              className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
              onClick={() => props.updateStatus('in progress', props.taskId)}
            >
              Block
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      {props.status === 'done' ? (
        <div>
          <button
            type="button"
            className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
            onClick={() => props.updateStatus('blocked', props.taskId)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
            onClick={deleteTask}
          >
            Delete
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default TaskItem
