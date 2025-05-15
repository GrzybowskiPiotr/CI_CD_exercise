import { Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CharactersPage {
  private readonly page: Page;
  private readonly url = URLs.CHARACTERS_PAGE;

  constructor(page: Page) {
    this.page = page;
  }

  // async navigate() {
  //   const response = await this.page.goto(this.url);
  //   console.log('>>>> Navigate to:', this.page.url());
  //   return response;
  // }
  async navigate() {
    console.log('>>>>> Navigating to:', this.url);
    const response = await this.page.goto(this.url);
    console.log('>>>>> Final URL:', this.page.url());
    return response;
  }

  async navigateToCharacterDetails(characterId: string) {
    await this.page.click(`[data-testid="character-link-${characterId}"]`);
    await this.page.waitForSelector('[data-testid="character-details"]');
  }
}
