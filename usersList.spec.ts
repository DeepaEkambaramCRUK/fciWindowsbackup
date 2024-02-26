import { faker } from '@faker-js/faker';

import { test } from '../fixture/pageFixtures';

export type userRole =
  | 'ECTF Admin'
  | 'Search Tool User'
  | 'Data Manager'
  | 'Super User';
test.describe('Admin tests enable, disable and Delete Users', async () => {
  test('Create Admin User', async ({
    loginPage,
    homePage,
    adminPage,
    createUserPage,
    usersPage,
  }) => {
    await loginPage.loginAs('admin');
    await homePage.btnAdmin.click({ timeout: 15000 });
    await adminPage.createUserButton.click();

    const firstname = 'ectftest';
    const lastname = 'admin';
    const emailNumber = faker.datatype.number(10000);
    const email = `ectf-test-account+admin${emailNumber}@cancer.org.uk`;
    await createUserPage.createUser('Search Tool User', firstname, lastname, email);
    // Write a assertion to check toast message "user created successfully"
    await createUserPage.editUser(firstname, lastname);
    // Now click disable user
    // Write a assertion to check toast message "user disabled"
    // verify for the status text Account status:	Disabled / FORCE_CHANGE_PASSWORD

    // Now click enable user
    // Write a assertion to check toast message "user enabled"
    // verify for the status text Account status:	enabled / FORCE_CHANGE_PASSWORD

    //Write an after hook , disbale and delete the user 
    await usersPage.disableUser();
    await createUserPage.deleteUser();
  });

});
