const baseUrl = "https://pokeapi.co/api/v2";

export type PokeApiListItem = { name: string; url: string };
export type PokeApiListResponse = { results: PokeApiListItem[] };

function idFromUrl(url: string): number {
    const parts = url.split('/').filter(Boolean);
    return Number(parts[parts.length - 1]);
}

export function artworkUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as Promise<T>;
}

export type Pokemon = {
    id: number,
    name: string,
    image: string,
}

export async function getPokemons(limit: number, offset: number = 0): Promise<Pokemon[]> {
    const url = `${baseUrl}/pokemon?limit=${limit}&offset=${offset}`;
    const data = await fetchJson<PokeApiListResponse>(url);
    return data.results.map((item) => {
        const id = idFromUrl(item.url);
        return { id, name: item.name, image: artworkUrl(id) };
    });
}
