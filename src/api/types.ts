export type NamedAPIResource = { name: string; url: string }

export type PokemonListResponse = {
    count: number
    next: string | null
    previous: string | null
    results: NamedAPIResource[]
}

export type Pokemon = {
    id: number
    name: string
    image: string
}