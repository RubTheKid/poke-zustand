import { Page, Locator, expect } from '@playwright/test'

export async function gotoHome(page: Page) {
    await page.goto('/')
    await expect(page.getByText('Loading Pokémon...')).toBeHidden()
}

export function grid(page: Page): Locator {
    return page.locator('.pokemon-grid')
}

export function firstCard(page: Page): Locator {
    return page.locator('.card').first()
}

export function firstFavButton(page: Page): Locator {
    return page.locator('.card-button').first()
}

export function favoritesCount(page: Page): Locator {
    return page.getByText(/^Favorites:\s*\d+/)
}

export function mobileLayout(page: Page) {
    return page.setViewportSize({ width: 375, height: 667 });
}

export function verifyTitleAndSubtitle(page: Page) {
    const title = expect(page.getByText('PokéDex')).toBeVisible();
    const subtitle = expect(page.getByText('Gotta catch \'em all!')).toBeVisible();

    return { title, subtitle }
}

export function verifyFirstPokemonCard(page: Page) {
    const pokemonCards = page.locator('[data-testid="pokemon-card"]')
    return expect(pokemonCards.first()).toBeVisible()
}

export function verifyPokemonGrid(page: Page) {
    const pokemonGrid = page.locator('[data-testid="pokemon-grid"]')
    return expect(pokemonGrid).toBeVisible()
}

export function verifyFirstFavoriteButton(page: Page) {
    const firstFavoriteButton = page.locator('[data-testid="pokemon-button"]').first()
    return expect(firstFavoriteButton).toBeVisible()
}

export function verifyFavoritesCount(page: Page) {
    const favoritesCount = page.getByText(/^Favorites:\s*\d+/)
    return expect(favoritesCount).toBeVisible()
}

export function clickFirstFavoriteButton(page: Page) {
    const firstFavoriteButton = page.locator('[data-testid="pokemon-button"]').first()
    expect(firstFavoriteButton).toHaveText('Add to favorites')
    return firstFavoriteButton.click()
}
