import { useMemo } from 'react'
import { useFavoritesStore } from '../../store/favorites'
import "./FavoritesBar.css"

export default function FavoritesBar() {
    const favorites = useFavoritesStore(s => s.favorites)
    const favoritesList = useMemo(() => Object.values(favorites), [favorites])

    return (
        <div className="favorites-bar">
            <h2 className="favorites-bar-title">Favorites: {favoritesList.length}</h2>
            <div className="favorites-list">
                {favoritesList.map(p => (
                    <span key={p.id} className="favorite-item">
                        <img src={p.image} alt={p.name} width={20} height={20} />
                        <span className="favorite-item-name">{p.name}</span>
                    </span>
                ))}
                {favoritesList.length === 0 && <span className="no-favorites">No favorites yet.</span>}
            </div>
        </div>
    )
}