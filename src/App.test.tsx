import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it, expect, beforeEach, vi } from 'vitest'

// hoisted pelo Vitest
vi.mock('./hooks/usePokemons', () => ({
  usePokemons: vi.fn(),
}))

// importe o hook após o vi.mock
import { usePokemons } from './hooks/usePokemons'

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renderiza loading inicial', () => {
    const mockedUsePokemons = vi.mocked(usePokemons)
    mockedUsePokemons.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    })

    render(<App />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renderiza lista quando carregada', () => {
    const mockedUsePokemons = vi.mocked(usePokemons)
    mockedUsePokemons.mockReturnValue({
      data: [
        { id: 1, name: 'bulbasaur', image: 'img1' },
        { id: 2, name: 'ivysaur', image: 'img2' },
      ],
      loading: false,
      error: null,
    })

    render(<App />)
    expect(screen.getByText('App')).toBeInTheDocument()
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('ivysaur')).toBeInTheDocument()
  })

  it('renderiza botões de favorito', () => {
    const mockedUsePokemons = vi.mocked(usePokemons)
    mockedUsePokemons.mockReturnValue({
      data: [{ id: 1, name: 'bulbasaur', image: 'img1' }],
      loading: false,
      error: null,
    })

    render(<App />)
    expect(screen.getByRole('button', { name: /add to favorites/i })).toBeInTheDocument()
  })

  it('renderiza erro quando falha', () => {
    const mockedUsePokemons = vi.mocked(usePokemons)
    mockedUsePokemons.mockReturnValue({
      data: [],
      loading: false,
      error: new Error('API Error'),
    })

    render(<App />)
    expect(screen.getByText(/Error: API Error/)).toBeInTheDocument()
  })
})