import { act } from 'react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useFavoritesStore } from './favorites'

describe('favorites store', () => {
    beforeEach(() => {
        useFavoritesStore.setState({ favorites: {} })
    })

    it('toggle adiciona e remove favoritos', () => {
        const p = { id: 1, name: 'bulbasaur', image: 'img' }
        const { toggleFavorite, isFavorite, favoritesList } = useFavoritesStore.getState()

        act(() => toggleFavorite(p))
        expect(isFavorite(1)).toBe(true)
        expect(favoritesList()).toHaveLength(1)

        act(() => toggleFavorite(p))
        expect(isFavorite(1)).toBe(false)
        expect(favoritesList()).toHaveLength(0)
    })
})