import { render, screen } from '@testing-library/react'
import PokemonCard from './PokemonCard'
import { describe, it, expect, beforeEach, vi } from 'vitest'

vi.mock('../store/favorites', () => ({
  useFavoritesStore: vi.fn(),
}))

describe('PokemonCardTest', () => {
  const mockPokemon = {
    id: 1,
    name: 'bulbasaur',
    image: 'https://example.com/bulbasaur.png'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renderiza nome e imagem do pokemon', () => {
    render(<PokemonCard pokemon={mockPokemon} />)

    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'bulbasaur' })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/bulbasaur.png')
  })

  it('renderiza botão de favorito', () => {
    render(<PokemonCard pokemon={mockPokemon} />)

    expect(screen.getByRole('button', { name: /add to favorites/i })).toBeInTheDocument()
  })

  it('renderiza com pokemon diferente', () => {
    const pikachu = { id: 25, name: 'pikachu', image: 'https://example.com/pikachu.png' }
    render(<PokemonCard pokemon={pikachu} />)

    expect(screen.getByText('pikachu')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'pikachu' })).toBeInTheDocument()
  })
})