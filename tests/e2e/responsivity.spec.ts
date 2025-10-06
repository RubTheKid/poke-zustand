import { test, expect } from '@playwright/test'
import { clickFirstFavoriteButton, gotoHome, mobileLayout, verifyFavoritesCount, verifyFirstFavoriteButton, verifyFirstPokemonCard, verifyPokemonGrid, verifyTitleAndSubtitle } from './support/pokemon.helpers';

test.describe('design resposivity', () => {
    test('should have mobile layout', async ({ page }) => {
        await mobileLayout(page);
        await gotoHome(page);

        await expect(page.getByText('Loading Pokémon...')).toBeHidden();

        await verifyTitleAndSubtitle(page)

        await verifyFirstPokemonCard(page)


        await verifyPokemonGrid(page)


        await verifyFirstFavoriteButton(page)
        await clickFirstFavoriteButton(page)

        await verifyFavoritesCount(page)
        await clickFirstFavoriteButton(page)

        await verifyFavoritesCount(page)
    })
})