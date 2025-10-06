import { test, expect } from '@playwright/test'
import { clickFirstFavoriteButton, gotoHome, mobileLayout, verifyFavoritesCount, verifyFirstFavoriteButton, verifyFirstPokemonCard, verifyLoading, verifyPokemonGrid, verifyTitleSubtitle } from './support/pokemon.helpers';

test.describe('design resposivity', () => {
    test('should have mobile layout', async ({ page }) => {
        await mobileLayout(page);
        await gotoHome(page);
        await verifyLoading(page)
        await verifyTitleSubtitle(page)
        await verifyFirstPokemonCard(page)
        await verifyPokemonGrid(page)
        await verifyFirstFavoriteButton(page)
        await clickFirstFavoriteButton(page)
        await verifyFavoritesCount(page)
        await clickFirstFavoriteButton(page)
        await verifyFavoritesCount(page)
    })
})