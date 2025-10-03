import { renderHook, waitFor } from '@testing-library/react'
import { usePokemons } from './usePokemons'

import { describe, expect, it, vi } from 'vitest'

vi.mock('../api/pokeApi', () => ({
    getPokemons: vi.fn().mockResolvedValue([
        { id: 1, name: 'bulbasaur', image: 'img1' },
        { id: 2, name: 'ivysaur', image: 'img2' },
    ]),
}))

describe('usePokemons', () => {
    it('carrega e retorna lista', async () => {
        const { result } = renderHook(() => usePokemons(2))
        expect(result.current.loading).toBe(true)

        await waitFor(() => expect(result.current.loading).toBe(false))
        expect(result.current.error).toBeNull()
        expect(result.current.data).toHaveLength(2)
        expect(result.current.data[0]).toMatchObject({ id: 1, name: 'bulbasaur' })
    })
})