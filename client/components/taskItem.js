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
            className="btnClass font-serif text-lg mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full"
            onClick={editTitle}
          >
            Save
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="text-black w-2/3 bg-red-200 placeholder-blue-500 focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-1 rounded-full appearance-none leading-normal"
          />
        </div>
      ) : (
        <div className="taskItem">
          <button
            type="button"
            className="btnClass font-serif text-lg mr-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full"
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
            className="btnClass font-serif text-lg mr-10 ml-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-000 text-black font-bold py-2 px-4 rounded-full"
            onClick={() => props.updateStatus('in progress', props.taskId)}
          >
            In progress
          </button>
        ) : (
          ''
        )}
        {props.status === 'in progress' ? (
          <div className="flex">
            <button
              type="button"
              className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full"
              onClick={() => props.updateStatus('blocked', props.taskId)}
            >
              Back
            </button>
            <button
              type="button"
              className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-full"
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
              className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full"
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
            className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full"
            onClick={() => props.updateStatus('blocked', props.taskId)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btnClass font-serif text-lg mr-5 ml-5 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ... hover:bg-red-600 text-black font-bold py-2 px-4 rounded-full"
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
