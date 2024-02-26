
import { Locator, Page, expect } from '@playwright/test';

export default class UsersPage {
  private page: Page;
  readonly editUserButton: Locator;
  readonly saveButton: Locator;
  readonly disableUserButton: Locator;
  readonly enableUserButton: Locator;
  readonly deleteUserButton: Locator;
  readonly confirmDeleteButton: Locator;
  readonly cancelButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.editUserButton = page.getByRole('button', { name: 'Edit user' });
    this.saveButton = page.getByLabel('Submit');

    this.disableUserButton = page.getByLabel('Disable user');
    this.enableUserButton = page.getByLabel('Enable user');
    this.deleteUserButton = page.getByLabel('Delete user');
    this.confirmDeleteButton = page.getByLabel('Yes, delete user');
    this.cancelButton = page.getByLabel('Cancel');
  }

  async viewUser(email: String) {
    // write a function to view the user profile when we pass their email id
    await this.page.waitForLoadState('domcontentloaded');
  }

  async disableUser() {
    await this.page.waitForSelector(`//button[@aria-label='Disable user']`, {
      timeout: 25000,
    });
    await this.disableUserButton.click({ timeout: 15000 });
    // Verify toast message "User disabled"
  }

  async enableUser() {
    await this.page.waitForSelector(`//button[@aria-label='Disable user']`, {
      timeout: 25000,
    });
    await this.enableUserButton.click({ timeout: 15000 });
    // Verify toast message "User enabled"
  }
}
