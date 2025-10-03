import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Pokemon = {
    id: number,
    name: string,
    image: string,
}

export type FavoritesState = {
    favorites: Record<number, Pokemon>,
    toggleFavorite: (p: Pokemon) => void,
    isFavorite: (id: number) => boolean,
    favoritesList: () => Pokemon[]
}

export const useFavoritesStore = create<FavoritesState>()(
    persist((set, get) => ({
        favorites: {},
        toggleFavorite: (p: Pokemon) => set((state) => {
            const copy = { ...state.favorites }
            if (copy[p.id]) {
                delete copy[p.id]
            } else {
                copy[p.id] = p
            }
            return { favorites: copy }
        }),
        isFavorite: (id: number) => Boolean(get().favorites[id]),
        favoritesList: () => Object.values(get().favorites),
    }),
        { name: "favorites-pokemons" }
    )
)