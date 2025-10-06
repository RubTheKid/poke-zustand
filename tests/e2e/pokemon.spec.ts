import { test, expect } from '@playwright/test'
import { clickFirstFavoriteButton, gotoHome, verifyAndPressTryAgain, verifyError, verifyErrorMessage, verifyFavoritesCount, verifyFirstFavoriteButton, verifyFirstPokemonCard, verifyTitleSubtitle } from './support/pokemon.helpers';

test.describe('Pokemon App', () => {
    test('should load the pokemon list and display the favorites', async ({ page }) => {
        await gotoHome(page);
        await verifyTitleSubtitle(page)
        await verifyFirstFavoriteButton(page)
        await verifyFirstPokemonCard(page)
    })
})

test.describe('Favorites Manageing', () => {
    test('should add and remove pokemon from favorites', async ({ page }) => {
        await gotoHome(page);
        await verifyFavoritesCount(page)
        await clickFirstFavoriteButton(page)

        // assert: contador de favoritos esta presente
        await expect(page.getByText('Favorites: 1')).toBeVisible()
        await clickFirstFavoriteButton(page)

        // assert: contador de favoritos esta presente
        await expect(page.getByText('Favorites: 0')).toBeVisible()
    })
})

test.describe('Should handle error state', () => {
    //act: rota para retornar erro
    test('should display error message when the API fails', async ({ page }) => {
        await page.route('**/pokemon*', async route => {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ error: 'API Error' })
            });
        });

        await gotoHome(page)

        await verifyErrorMessage(page)

        await verifyError(page)

        await verifyAndPressTryAgain(page)
    })
})