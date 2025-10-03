import type { Pokemon } from "../store/favorites"

type Props = {
    pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: Props) {
    return (
        <div>
            <img src={pokemon.image} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <button>Add to favorites</button>
        </div>
    )
}