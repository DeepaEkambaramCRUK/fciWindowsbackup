
import { Locator, Page, expect } from '@playwright/test';

export default class UserFeedbackPage {
  private page: Page;
  readonly viewAndResolveBtn: Locator;
  readonly viewFeedbackBtn: Locator;
  readonly closeBtn: Locator;
  readonly resolutionComment: Locator;
  readonly resolveBtn: Locator;
  readonly cancelBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.viewAndResolveBtn = page.getByLabel('View & Resolve');
    this.viewFeedbackBtn = page.getByLabel('View Feedback');
    this.closeBtn = page.getByLabel('Close');
    this.resolutionComment = page.getByTestId('resolutionComment');
    this.resolveBtn = page.getByLabel('Resolve');
    this.cancelBtn = page.getByLabel('Cancel');
  }

  async viewAndResolve() {
    await this.viewAndResolveBtn.click({ timeout: 15000 });
    await this.page.waitForLoadState('domcontentloaded');
    await this.resolutionComment.fill("Admin read the feedback and resolved");
    await this.resolveBtn.click({ timeout: 15000 });
    // verify the table first entry has admin user name updated
    // Check the button label changed to view feedback
  }

}
