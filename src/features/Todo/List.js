import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from './toDoSlice';
export default function List() {
  // const listItem = useSelector(selectValue);
  const listItem = useSelector((state) => {
    return state.todo.value;
  });

  let [totalCheck, setTotalCheck] = useState(0);
  const handleClick = (value) => {
    if (value) {
      setTotalCheck(totalCheck + 1);
    } else {
      setTotalCheck(totalCheck - 1);
    }
  }

  return (
    <nav className="panel">
      <p className="panel-heading">
        Keeping in Track
            </p>
      <div className="checklist" >
        {
          listItem.map((item, i) => (
            <div className="panel-block" key={i} >
              <label className="checkbox" htmlFor={`item-${i}`} >
                <input aria-label="checkbox" id={`item-${i}`} type="checkbox" onClick={(e) => { handleClick(e.target.checked) }} />
                {item}
              </label>
            </div>
          ))
        }
      </div>
      {
        listItem.length > 0 &&
        <div className="panel-block total">
          <span className="is-outlined is-fullwidth"> Completed: </span>
          <span id="total" data-testid="total">
            {totalCheck}
          </span>
          <span>
            {`/${listItem.length}`}
          </span>
        </div>
      }
    </nav>
  )
}