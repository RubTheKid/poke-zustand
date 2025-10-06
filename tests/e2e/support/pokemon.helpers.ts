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

/*export function verifyTitleAndSubtitle(page: Page) {
    const title = expect(page.getByText('PokéDex')).toBeVisible();
    const subtitle = expect(page.getByText('Gotta catch \'em all!')).toBeVisible();

    return { title, subtitle }
}*/

export function verifyTitle(page: Page) {
    return expect(page.getByText('PokéDex')).toBeVisible()
}
export function verifySubtitle(page: Page) {
    return expect(page.getByText('Gotta catch \'em all!')).toBeVisible()
}

export async function verifyTitleSubtitle(page: Page) {
    await verifyTitle(page);
    await verifySubtitle(page);
}

export function verifyLoading(page: Page) {
    return expect(page.getByText('Loading Pokémon...')).toBeHidden()
}


export async function verifyFirstPokemonCard(page: Page) {
    const pokemonCards = page.locator('[data-testid="pokemon-card"]');
    await expect(pokemonCards.first()).toBeVisible();
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

export function verifyErrorMessage(page: Page) {
    return expect(page.getByText('Oops! Something went wrong')).toBeVisible()
}

export async function verifyError(page: Page) {
    return await expect(page.locator('.error-message p')).toHaveText(/Request failed/i)
}

export async function verifyAndPressTryAgain(page: Page) {
    await expect(page.getByRole('button', { name: 'Try Again' })).toBeVisible()
    await page.getByRole('button', { name: 'Try Again' }).click()
}