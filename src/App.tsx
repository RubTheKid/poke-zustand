import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoritesBar from './components/FavoritesBar'
import PokemonGrid from './components/PokemonGrid'

function App() {
  return (
    <div>
      <h1>App</h1>
      <PokemonGrid />
      <FavoritesBar />
    </div>
  )
}

export default App
