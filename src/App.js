import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [review, setReview] = useState([]);
  const form = useRef(null);
  const listReviews = review.map((rev, index) => {
    return (
      <ul>
        <form id={index}>
          <label for="movieID">Movie ID:</label>
          <input type="text" id="movieID" name="movieID" value={rev[0]} readonly></input>
          <input type="number" id="rating" name="rating" min="0" max="10" placeholder={rev[1]} required></input>
          <input type="text" placeholder={rev[2]} name="comment" required></input>
          <input type="button" id="hover" onClick={() => handleClick(index)} value="Delete"></input>
        </form>
      </ul>
    )
  });
  function handleClick(index) {
    const reviewForm = document.getElementById(index);
    review.splice(index, 1);
    reviewForm.remove();
    console.log(review);
  };
  useEffect(() => {
    fetch('/profile_editor', {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => { return response.json() })
      .then(data => {
        setReview(data.review)
        console.log(data)
      })
  }, []);
  function saveChanges() {
    fetch('/save_changes', {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
  };
  return (
    <div className="App">
      {listReviews}
      <a href="/edit_profile"><input type="submit" id="hover" value="Save Changes" onClick={() => saveChanges()}></input></a>
    </div>
  );
};

export default App;
