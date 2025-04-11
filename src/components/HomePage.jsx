import React, { useState, useEffect } from 'react'
import { fetchRandomDrink, fetchDrinkByName } from '../services/api'
import '../styles/HomePage.css'

function HomePage() {
  const [drink, setDrink] = useState(null)
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const getRandom = async () => {
    setLoading(true)
    const res = await fetchRandomDrink()
    setTimeout(() => {
      setDrink(res)
      setSearchResult(null)
      setLoading(false)
    }, 1000)
  }

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    const res = await fetchDrinkByName(query)
    setTimeout(() => {
      setSearchResult(res)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getRandom()
  }, [])

  const renderIngredients = (drink) => {
    const ingredients = []
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`]
      const measure = drink[`strMeasure${i}`]
      if (ingredient) {
        ingredients.push(`${measure || ''} ${ingredient}`.trim())
      }
    }
    return ingredients.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  }

  const renderDrink = (d) => {
    if (!d) return <p>Drink not found.</p>

    return (
      <div className="drink-card">
        <h2>{d.strDrink}</h2>
        <img src={d.strDrinkThumb} alt={d.strDrink} />
        <p><strong>Category:</strong> {d.strCategory}</p>
        <p><strong>Type:</strong> {d.strAlcoholic}</p>
        <p><strong>Glass:</strong> {d.strGlass}</p>
        <h3>Ingredients</h3>
        <ul>{renderIngredients(d)}</ul>
        <h3>Instructions</h3>
        <p>{d.strInstructions}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Cocktail Blog</h1>
      <p className="subtitle">Discover your next favorite drink!</p>
      
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for a drink..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={getRandom}>Surprise Me</button>
      </div>

      {loading ? (
        <div className="spinner" />
      ) : searchResult ? (
        renderDrink(searchResult)
      ) : (
        renderDrink(drink)
      )}
    </div>
  )
}

export default HomePage
