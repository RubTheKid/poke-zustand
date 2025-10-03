import { test, expect } from '@playwright/test'

test.describe('Pokemon App', () => {
    test('deve carregar a lista de pokemons e exibir os favoritos', async ({ page }) => {
        await page.goto('/');

        //verificar se o titulo esta presente
        await expect(page.getByText('PokéDex')).toBeVisible();
        await expect(page.getByText('Gotta catch \'em all!')).toBeVisible();


    }
    )
})