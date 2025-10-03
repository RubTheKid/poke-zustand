import type { Pokemon } from "../store/favorites"
import PokemonCard from "./PokemonCard"

type Props = {
    pokemons: Pokemon[]
}

export default function PokemonGrid({ pokemons }: Props) {
    return (
        <div>
            <h1>PokemonGrid</h1>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}