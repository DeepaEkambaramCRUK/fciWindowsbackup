
import { Locator, Page, expect } from '@playwright/test';

export default class AccountCreatedPage {
  private page: Page;
  readonly accountCreatedlbl: Locator;
  readonly loginToAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountCreatedlbl = page.getByLabel('Your account has been created!');
    this.loginToAccountBtn = page.getByLabel('Verify');
  }

  // after login user is landed in the home page - check if this is expected.
  async loginToNewAccount() {
    // check if the user is on the right page accountCreatedlbl
    await this.loginToAccountBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
