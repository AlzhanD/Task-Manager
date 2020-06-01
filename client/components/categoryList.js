import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import CategoryDelete from './categoryDelete'

const CategoryList = (props) => {
  const [newCategoryList, setNewCategoryList] = useState('')
  return (
    <div>
      <ul>
        {props.categories.map((el) => (
          <li key={el} className="mb-4 mt-4 shadow-xl">
            <Link to={`/${el}`}>{el}</Link>
            {/* <CategoryDelete */}
            {/*  deleteCategory={props.deleteCategory} */}
            {/*  newCategoryList={newCategoryList} */}
            {/*  category={el} */}
            {/* /> */}
          </li>
        ))}
      </ul>
      <input
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            props.addCategory(newCategoryList)
          }
        }}
        type="text"
        id="input-field"
        className="text-black bg-red-200 placeholder-blue-500 focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-1 rounded-full  appearance-none leading-normal"
        onChange={(e) => setNewCategoryList(e.target.value)}
        value={newCategoryList}
        placeholder="Add new task"
      />
      <button
        type="button"
        className="btnClass ml-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-green-500 text-black font-bold py-1 px-1 rounded-full"
        onClick={() => props.addCategory(newCategoryList)}
      >
        add
      </button>
    </div>
  )
}

CategoryList.propTypes = {}

export default React.memo(CategoryList)
