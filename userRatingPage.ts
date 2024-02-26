
import { Locator, Page, expect } from '@playwright/test';

export default class UserRatingPage {
  private page: Page;
  readonly manageRatingTab: Locator;
  readonly ratingsReceivedTab: Locator;
  readonly createNewRatingBtn: Locator;
  readonly campaignNameField: Locator;
  readonly questionField: Locator;
  readonly identifierField: Locator;
  readonly triggerURLField: Locator;
  readonly selectExpiration: Locator;
  readonly submitBtn: Locator;
  readonly cancelBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    // Locators need to be updated
    this.manageRatingTab = page.getByLabel('View & Resolve');
    this.ratingsReceivedTab = page.getByLabel('View Feedback');
    this.createNewRatingBtn = page.getByLabel('Close');
    this.campaignNameField = page.getByLabel('Resolve');
    this.questionField = page.getByLabel('Cancel');
    this.identifierField = page.getByLabel('View & Resolve');
    this.triggerURLField = page.getByLabel('View Feedback');
    this.selectExpiration = page.getByLabel('Close');
    this.submitBtn = page.getByLabel('Submit');
    this.cancelBtn = page.getByLabel('Cancel');
  }

  async viewFeedback(rowNumber: String) {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async createNewRatingCampaign() {
    await this.createNewRatingBtn.click({ timeout: 15000 });
    // Fill all details
    //
    await this.submitBtn.click({ timeout: 15000 });
  }

}
