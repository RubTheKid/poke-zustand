import { act } from 'react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useFavoritesStore } from './favorites'

describe('favorites store', () => {
    beforeEach(() => {
        useFavoritesStore.setState({ favorites: {}, favoritesList: [] })
    })

    it('toggle adiciona e remove favoritos', () => {
        const p = { id: 1, name: 'bulbasaur', image: 'img' }
        const { toggleFavorite } = useFavoritesStore.getState()

        act(() => toggleFavorite(p))

        //verificar estado após a ação
        const stateAfterAdd = useFavoritesStore.getState()
        expect(stateAfterAdd.isFavorite(1)).toBe(true)
        expect(stateAfterAdd.favoritesList).toHaveLength(1)

        act(() => toggleFavorite(p))

        //vrificar estado após remoção
        const stateAfterRemove = useFavoritesStore.getState()
        expect(stateAfterRemove.isFavorite(1)).toBe(false)
        expect(stateAfterRemove.favoritesList).toHaveLength(0)
    })
})