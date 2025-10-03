import { useEffect, useState } from "react";
import type { Pokemon } from "../store/favorites";
import { listPokemons } from "../api/endpoints";

export function usePokemons(limit: number) {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let active = true
        setLoading(true)
        listPokemons(limit)
            .then((list) => { if (active) { setPokemons(list); setError(null) } })
            .catch((err) => { if (active) { setError(err) } })
            .finally(() => { if (active) { setLoading(false) } })
        return () => { active = false }
    }, [limit]);

    return { data: pokemons, loading, error }
}