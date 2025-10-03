import type { Pokemon } from "../../store/favorites"
import PokemonCard from "../PokemonCard/PokemonCard"
import "./PokemonGrid.css"

type Props = {
    pokemons: Pokemon[]
    loading?: boolean
}

export default function PokemonGrid({ pokemons, loading = false }: Props) {
    if (loading) {
        return (
            <div className="pokemon-grid-container">
                <h2 className="pokemon-grid-title">Pokémon Collection</h2>
                <div className="pokemon-grid">
                    <div className="pokemon-grid-loading">
                        Loading Pokémon...
                    </div>
                </div>
            </div>
        )
    }

    if (pokemons.length === 0) {
        return (
            <div className="pokemon-grid-container">
                <h2 className="pokemon-grid-title">Pokémon Collection</h2>
                <div className="pokemon-grid">
                    <div className="pokemon-grid-empty">
                        No Pokémon found. Try refreshing the page!
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="pokemon-grid-container">
            <h2 className="pokemon-grid-title">Pokémon Collection</h2>

            <div className="pokemon-grid-stats">
                <span className="pokemon-count">
                    Total: <span className="pokemon-count-number">{pokemons.length}</span> Pokémon
                </span>
            </div>

            <div className="pokemon-grid">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    )
}