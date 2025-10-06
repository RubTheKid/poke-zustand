import { useFavoritesStore, type Pokemon } from "../../store/favorites"
import "./PokemonCard.css"

type Props = {
    pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: Props) {
    const toggleFavorite = useFavoritesStore(s => s.toggleFavorite)
    const isFavorite = useFavoritesStore(s => s.isFavorite)
    const fav = isFavorite(pokemon.id)

    return (
        <div className="card" data-testid="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} className="card-img" data-testid="pokemon-image" />
            <h3 className="card-title" data-testid="pokemon-name">{pokemon.name}</h3>
            <button
                className={`card-button ${fav ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(pokemon)}
                aria-pressed={fav}
                data-testid="pokemon-button"
            >
                {fav ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    )
}