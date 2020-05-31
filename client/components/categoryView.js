import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import TaskItem from './taskItem'
import './main.scss'
import SortTasks from './sortTask'

const CategoryView = (props) => {
  const [newTasks, setNewTasks] = useState('')

  return (
    <div className="categoryView relative">
      <SortTasks category={props.category} />
      <div className="flex flex-col px-3 mt-6 scrolling-touch overflow-auto h-auto ... ... rounded-lg shadow-xl">
        <FlipMove
          staggerDelayBy={150}
          appearAnimation="elevator"
          enterAnimation="fade"
          leaveAnimation="fade"
        >
          {props.taskList.map((el) => (
            <h3
              key={el.length}
              className="my-3 ml-5  order-last font-serif text-xl text-blue-1000 shadow-lg"
            >
              <TaskItem
                title={el.title}
                status={el.status}
                taskId={el.taskId}
                updateStatus={props.updateStatus}
                taskNameUpdate={props.taskNameUpdate}
                taskDelete={props.taskDelete}
              />
            </h3>
          ))}
        </FlipMove>
      </div>
      <div className="inputClass px-2 py-2 ">
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              props.addTasks(newTasks)
            }
          }}
          type="text"
          id="input-field"
          className="text-black bg-red-200 placeholder-blue-500 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-1  appearance-none leading-normal"
          onChange={(e) => setNewTasks(e.target.value)}
          value={newTasks}
          placeholder="type"
        />
        <button
          type="button"
          className="btnClass mx-2 font-serif text-lg transition duration-500 ease-in-out hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
          onClick={() => props.addTasks(newTasks)}
        >
          Add
        </button>
        <Link to="/">
          <button
            type="button"
            className="btnClass font-serif text-lg mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-400 text-black font-bold py-1 px-1 rounded"
          >
            Back
          </button>
        </Link>
      </div>
      {props.alert && <div className="titlee">{props.alert}</div>}
    </div>
  )
}

export default CategoryView
