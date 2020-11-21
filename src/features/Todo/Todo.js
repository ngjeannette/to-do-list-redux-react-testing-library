import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateValue, } from './toDoSlice';
import List from './List';

export function ToDo() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    const newlist = [...list, search]
    setList(newlist);
    dispatch(updateValue(newlist));
    setSearch('');
  };
  const handleKeyPress = (e) => { if (e.key === 'Enter') { debugger; handleSubmit() } }
  const handleInputChange = (e) => { setSearch(e.target.value); }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h1 className="has-text-black is-size-1">To Do Test</h1>
          <div className="input-container">
            <input aria-label="textbox" maxLength="20" className="input" type="text" placeholder="Feed the 🐱" onChange={handleInputChange} onKeyPress={handleKeyPress} value={search} />
            <button className="button is-link" aria-label="submit" id="submit" onClick={handleSubmit}> Submit</button>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
}