
import { Locator, Page, expect } from '@playwright/test';

export default class ClinicalSettingVerificationPage {
  private page: Page;
  readonly toBeEligibleLbl: Locator;
  readonly iAcknowledgeCkb: Locator;
  readonly nextBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toBeEligibleLbl = page.getByLabel('To be eligible for an');
    this.iAcknowledgeCkb = page.getByTestId('clinical-setting-checkbox');
    this.nextBtn = page.getByLabel('Next');
  }

  async selfDeclaration() {
    await this.iAcknowledgeCkb.click({ timeout: 30000 });
    await this.nextBtn.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
