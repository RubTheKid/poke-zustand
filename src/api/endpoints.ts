import { getJson } from './client'
import { type PokemonListResponse, type Pokemon } from './types'
import { idFromResourceUrl, officialArtworkUrl } from './utils'

export async function listPokemons(limit = 30, offset = 0): Promise<Pokemon[]> {
    const data = await getJson<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`)
    return data.results.map((it) => {
        const id = idFromResourceUrl(it.url)
        return { id, name: it.name, image: officialArtworkUrl(id) }
    })
}