
import { Locator, Page, expect } from '@playwright/test';

import { userInfo } from '../data/userType';

export default class SignupPage {
    private page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly nhsEmailField: Locator;
    readonly selectCountry: Locator;
    readonly selectRole: Locator;
    readonly selectNhsTrustName: Locator;
    /* readonly selectSpecialities: Locator;
    readonly newsLetterYes: Locator;
    readonly newsLetterNo: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly ckbiAgree: Locator; */
    readonly btnSubmit: Locator;

  
    constructor(page: Page) {
      this.page = page;
      this.firstNameField = page.getByLabel('To be eligible for an');
      this.lastNameField = page.getByTestId('clinical-setting-checkbox');
      this.nhsEmailField = page.getByTestId('clinical-setting-checkbox');
      this.selectCountry = page.getByLabel(
        'Please select a country...',
      );
      this.selectRole = page.getByLabel(
        'Select...',
      );
      this.selectNhsTrustName = page.getByLabel('Select...');
      this.btnSubmit = page.getByLabel('Next');
    }

   // Leave the list options for now 
 /*  async selectCountryByValue(countryValue: string) {
    await this
    .listCountry
    .filter({ has: this.getbyText('countryValue')})
    .getByRole('button', { name: 'Add to cart' })
    .click();
  }
 */

 
  }

