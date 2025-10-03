const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getJson<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`)
    if (!res.ok) throw new Error(`Request failed ${res.status} ${path}`)
    return res.json() as Promise<T>
}