import { test, type Page } from "@playwright/test";
import { LoginPage } from "../pageObjectModel/LoginPage";
import { Enviroment } from "../enviroments/Enviroments";


let mainPage: Page;
let loginPage: LoginPage;
let enviroment: Enviroment;

test.beforeEach(async ({ page, context }) => {
  mainPage = page;
  loginPage = new LoginPage(mainPage);
});

//#######TEKUS PLATFORM TEST CASES #######//

// TEST CASES 1: User login to the platform//

test('loginAUserPlatform', async ({ page }) => {
  await mainPage.goto('https://qalab.invertebrado.co/');
  await mainPage.getByText('Username or Email').click();
  await mainPage.getByLabel('Username or Email *').fill('qatester');
  await mainPage.getByLabel('Password *').click();
  await mainPage.getByLabel('Password *').fill('N9j^u9&Hm@dz2Kcs');
  await mainPage.getByRole('button', { name: 'Log in' }).click();
  await mainPage.waitForLoadState();
  await mainPage.waitForTimeout(4000);
  await mainPage.getByRole('heading', { name: 'Dashboard' }).click();
  await mainPage.locator('li:nth-child(3) > .mat-menu-trigger').click();
  await mainPage.getByRole('menuitem', { name: ' Logout' }).click();
  await mainPage.waitForTimeout(2000);
  await mainPage.locator('img').click();  
});

//TEST CASES 2: Menu navigation and content validation//

test('validationMenuContent', async ({ page }) => {
  test.setTimeout(150000);
  await mainPage.goto('https://qalab.invertebrado.co/');
  await mainPage.getByText('Username or Email').click();
  await mainPage.getByLabel('Username or Email *').fill('qatester');
  await mainPage.getByLabel('Password *').click();
  await mainPage.getByLabel('Password *').fill('N9j^u9&Hm@dz2Kcs');
  await mainPage.getByRole('button', { name: 'Log in' }).click();
  await mainPage.waitForLoadState();
  await mainPage.waitForTimeout(4000);
  await mainPage.getByRole('link', { name: ' Multimedia' }).click();
  await mainPage.waitForLoadState();
  await mainPage.waitForTimeout(3000);
  await mainPage.getByRole('img', { name: '...' }).first().click();
  await mainPage.getByText('Multimedia properties').click();
  await mainPage.locator('strong').filter({ hasText: 'Size' }).click();
  await mainPage.locator('#mat-dialog-0').getByText('1.02MB').click();
  await mainPage.getByText('Md5').click();
  await mainPage.getByText('5a091bc66686925f686445a41aa6456d').click();
  await mainPage.getByLabel('Name *').click();
  await mainPage.locator('.tab-general-wrapper > div').first().click();
  await mainPage.waitForTimeout(15000);
  await mainPage.locator('#mat-dialog-1 img').waitFor({ state: 'attached' });
  await mainPage.locator('#mat-dialog-1 img').waitFor({ state: 'visible' });
  await mainPage.locator('#mat-dialog-1 img').click();
});

