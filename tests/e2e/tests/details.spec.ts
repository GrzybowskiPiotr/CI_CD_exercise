import { expect, test } from '@playwright/test';
import { CharacterDetailsPage } from '../pages/CharacterDetailsPage';
import { CharactersPage } from '../pages/CharactersPage';

test('check base URL is used', async ({ page }) => {
  console.log('>>>>> CURRENT BASE URL:', page.url());
  await page.goto('/');
  expect(await page.title()).not.toBe('');
});

test('navigation to character details', async ({ page }) => {
  const mainPage = new CharactersPage(page);
  await mainPage.navigate();
  await mainPage.navigateToCharacterDetails('1');
});

test('navigation to characters list', async ({ page }) => {
  const detailsPage = new CharacterDetailsPage(page, '3');
  await detailsPage.navigate();
  await detailsPage.navigateToCharactersList();
});
