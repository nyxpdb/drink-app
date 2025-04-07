import axios from 'axios'

export const fetchRandomDrink = async () => {
  const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  return res.data.drinks[0]
}

export const fetchDrinkByName = async (name) => {
  const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
  return res.data.drinks ? res.data.drinks[0] : null
}
