import React, { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState("Harry Potter")
  const [year, setYear] = useState(2021)
  const [resume, setResume] = useState("my resume")

  const handleSubmit = e => {
    e.preventDefault()

    const movie = {
      title: title,
      year: year,
      resume: resume
    }

    fetch('http://localhost:5000/movies', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} />
      <input type="number" value={year} />
      <input type="text" value={resume} />
      <button type="submit">Creer film</button>
    </form>
  );
};

export default Form;