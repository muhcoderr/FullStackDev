import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
      .then(function (response) {
        // handle success
        setJokes(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  return (
    <>
      <h1>Learn Full Stack Development</h1>
      {jokes.map((joke, i) => {
        <div key={i}>
          <h4>{joke.id}</h4>
          <h2>{joke.name}</h2>
          <p>{joke.description}</p>
        </div>
      })}
    </>
  )
}

export default App
