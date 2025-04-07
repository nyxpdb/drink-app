import React, { useState, useEffect } from 'react'
import { fetchRandomDrink, fetchDrinkByName } from '../services/api'

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
      setLoading(false)
    }, 4000)
  }

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    const res = await fetchDrinkByName(query)
    setTimeout(() => {
      setSearchResult(res)
      setLoading(false)
    }, 4000)
  }

  useEffect(() => {
    getRandom()
  }, [])

  const renderDrink = (d) => {
    if (!d) return React.createElement('p', null, 'Drink not found.')
    return React.createElement('div', null,
      React.createElement('h2', null, d.strDrink),
      React.createElement('img', { src: d.strDrinkThumb, alt: d.strDrink }),
      React.createElement('p', null, 'Category: ' + d.strCategory),
      React.createElement('p', null, 'Alcoholic: ' + d.strAlcoholic),
      React.createElement('p', null, 'Glass: ' + d.strGlass)
    )
  }

  return React.createElement('div', { className: 'container' },
    React.createElement('h1', null, 'Cocktail App'),
    React.createElement('input', {
      type: 'text',
      placeholder: 'Search for a drink...',
      value: query,
      onChange: (e) => setQuery(e.target.value),
      onKeyDown: (e) => e.key === 'Enter' && handleSearch()
    }),
    loading
      ? React.createElement('div', { className: 'spinner' })
      : searchResult
        ? renderDrink(searchResult)
        : renderDrink(drink)
  )
}

export default HomePage
