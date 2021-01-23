import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      await axios.get('http://localhost:1337/recipes')
        .then(response => {
          setRecipes(response.data)
        })
    }
    getRecipes()
  }, [])

  return (
    <div>
      <h1>Hello!</h1>
      {console.log(recipes)}

      <div>
        {recipes.map(data =>
          <div key={data.id}>
            <p>{data.title}</p>
            <p>{data.ingredients}</p>
            <p>{data.instructions}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
