export function idFromResourceUrl(url: string): number {
    const parts = url.split('/').filter(Boolean)
    return Number(parts[parts.length - 1])
}

export function officialArtworkUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}