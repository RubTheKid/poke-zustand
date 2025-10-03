import { getJson } from './client'
import { getPokemons } from './pokeApi'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('getPokemons', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('mapeia lista com id e imagem', async () => {
        const fakeJson = {
            results: [
                { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
            ],
        }
        const okResponse = new Response(JSON.stringify(fakeJson), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
        vi.spyOn(global, 'fetch').mockResolvedValueOnce(okResponse)

        const list = await getPokemons(2)
        expect(list).toEqual([
            { id: 1, name: 'bulbasaur', image: expect.stringContaining('/1.png') },
            { id: 2, name: 'ivysaur', image: expect.stringContaining('/2.png') },
        ])
    })

    it('lança erro quando resposta não ok', async () => {
        const badResponse = new Response(null, { status: 500 })
        vi.spyOn(global, 'fetch').mockResolvedValueOnce(badResponse)
        await expect(getPokemons(1)).rejects.toThrow()
    })

    it('getJson retorna dados quando resposta é ok', async () => {
        const mockData = { name: 'bulbasaur', id: 1 }
        const mockResponse = new Response(JSON.stringify(mockData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })

        vi.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)

        const result = await getJson('/pokemon/1')

        expect(result).toEqual(mockData)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
    })

})