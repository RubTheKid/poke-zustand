import { test, expect } from '@playwright/test'

test.describe('Pokemon App', () => {
    test('should load the pokemon list and display the favorites', async ({ page }) => {
        //arrange: navega para a pagina inicial
        await page.goto('/');

        // assert: titulo e subtitulo estao presentes
        await expect(page.getByText('PokéDex')).toBeVisible();
        await expect(page.getByText('Gotta catch \'em all!')).toBeVisible()

        // assert: botão de favorito esta presente
        await expect(page.locator('.card-button').first()).toBeVisible()

        // assert: card do primeiro pokemon esta presente
        const pokemonCards = page.locator('.card')
        await expect(pokemonCards.first()).toBeVisible()

    })
})

test.describe('Favorites Manageing', () => {
    test('should add and remove pokemon from favorites', async ({ page }) => {
        //arrange: navega para a pagina inicial
        await page.goto('/')

        // assert: contador de favoritos esta presente
        await expect(page.getByText('Favorites: 0')).toBeVisible()

        // act: clica no botão de favorito do primeiro pokemon
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

        //arrange: navega para a pagina inicial
        await page.goto('/')

        // assert: mensagem de erro esta presente
        await expect(page.getByText('Oops! Something went wrong')).toBeVisible()

        // assert: mensagem de erro esta presente
        await expect(page.locator('.error-message p')).toHaveText(/Request failed/i)

        // assert: botão de try again esta presente
        await expect(page.getByRole('button', { name: 'Try Again' })).toBeVisible()

        // act: clica no botão de try again
        await page.getByRole('button', { name: 'Try Again' }).click()
    })
})