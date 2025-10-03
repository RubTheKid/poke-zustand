import './App.css'
import FavoritesBar from './components/FavoritesBar'
import PokemonGrid from './components/PokemonGrid'
import { usePokemons } from './hooks/usePokemons';

function App() {
  const { data, loading, error } = usePokemons(30);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>App</h1>
      <PokemonGrid pokemons={data} />
      <FavoritesBar />
    </div>
  )
}

export default App