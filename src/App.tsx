import './App.css'
import FavoritesBar from './components/FavortiesBar/FavoritesBar'
import PokemonGrid from './components/PokemonGrid/PokemonGrid'
import { usePokemons } from './hooks/usePokemons';

function App() {
  const { data, loading, error } = usePokemons(30);

  if (error) {
    return (
      <div className="app-container">
        <div className="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>{error.message}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">PokéDex</h1>
        <p className="app-subtitle">Gotta catch 'em all!</p>
      </header>

      <main className="app-main">
        <FavoritesBar />
        <PokemonGrid pokemons={data} loading={loading} />
      </main>
    </div>
  )
}

export default App