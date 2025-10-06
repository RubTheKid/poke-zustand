import { test, expect } from '@playwright/test'

test.describe('design resposivity', () => {
    test.only('should have mobile layout', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        await expect(page.getByText('Loading Pokémon...')).toBeHidden();

        // assert: titulo e subtitulo estao presentes
        await expect(page.getByText('PokéDex')).toBeVisible();
        await expect(page.getByText('Gotta catch \'em all!')).toBeVisible()


        // assert: card do primeiro pokemon esta presente
        const pokemonCards = page.locator('.card')
        await expect(pokemonCards.first()).toBeVisible()


        const pokemonGrid = page.locator('.pokemon-grid');
        await expect(pokemonGrid).toBeVisible();


        // assert: botão de favorito esta presente
        await expect(page.locator('.card-button').first()).toBeVisible()
        await expect(page.locator('.card-button').first()).toHaveText('Add to favorites')
        const firstFavoriteButton = page.locator('.card-button').first();
        await firstFavoriteButton.click();

        // assert: contador de favoritos esta presente
        await expect(page.getByText('Favorites: 1')).toBeVisible()
        // act: clica no botão de favorito do primeiro pokemon
        await firstFavoriteButton.click();

        // assert: contador de favoritos esta presente
        await expect(page.getByText('Favorites: 0')).toBeVisible()
    })
})