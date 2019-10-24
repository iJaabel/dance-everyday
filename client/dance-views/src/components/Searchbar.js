import React, { useState } from 'react';

const Searchbar = ({ handleOnSubmit, handleOnSelect }) => {
  const [formInput, setInput] = useState('');
  const [display, setDisplay] = useState(false);

  const handleOnInput = e => {
    setInput(e.target.value);
  };

  const handleOnDisplay = () => {
    setDisplay(!display);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleOnSubmit(formInput);
  };

  const handleSelect = e => {
    const element = e.target;
    const { name } = element;
    handleOnSelect(name);
  };

  return (
    <div className="search-bar">
      <button onClick={handleOnDisplay} className="filter-button" name="Filter by">Filter by</button>
      {display ? (
        <div>
          <button className="filter-by-options" name="organizers" onClick={handleSelect}>Organizers</button>
          <button className="filter-by-options" name="venues" onClick={handleSelect}>Venue</button>
          {/* <button className="filter-by-options" name="date" onClick={handleSelect}>Date</button> */}
        </div>
      ) : (
          <div/>
        )}
      <form>
        <label>
          <input
            type="text"
            name="name"
            onChange={handleOnInput}
            id="form-input"
            placeholder="Search dance events"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          id="form-submit"
        />
      </form>
      {/* Magnifying glass icon */}
      {/* <img src='https://cdn.pixabay.com/photo/2016/03/31/19/14/magnifying-glass-1294834_1280.png' id="mag" alt="search" onClick={handleSubmit} /> */}
    </div>
  );
};

export default Searchbar;
