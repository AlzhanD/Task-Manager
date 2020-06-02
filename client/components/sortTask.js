import React from 'react'
import { Link } from 'react-router-dom'

const SortTasks = (props) => {
  return (
    <div className="days mx-6 font-serif text-2xl font-mono text-teal-900 text-center">
      <span className="mr-4	text-purple-900">
        <Link to={`/${props.category}/day`}>
          <button
            type="button"
            className="bg-transparent text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Day
          </button>
        </Link>
      </span>
      <span className="mr-4	text-purple-800 ">
        <Link to={`/${props.category}/week`}>
          {' '}
          <button
            type="button"
            className="bg-transparent  text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Week
          </button>
        </Link>
      </span>
      <span className="mr-4	text-purple-700 ">
        <Link to={`/${props.category}/month`}>
          {' '}
          <button
            type="button"
            className="bg-transparent  text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Month
          </button>
        </Link>
      </span>
      <span className="mr-4	text-purple-600 ">
        <Link to={`/${props.category}`}>
          {' '}
          <button
            type="button"
            className="bg-transparent text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            All
          </button>
        </Link>
      </span>
    </div>
  )
}

export default SortTasks
