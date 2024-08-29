import { test, expect, type Page } from "@playwright/test";
import { CommonActions } from "./common/CommonActions";
import { Enviroment } from "../enviroments/Enviroments";

export class LoginPage {

    page: Page;
    commonActions: CommonActions;
    enviroment: Enviroment;

    USER_INPUT = '#Username or Email'
    PASSWORD_INPUT = '#Password *'
    LOGIN_BUTTON = 'Login in'

    constructor(
        page: Page
    ) {
        this.commonActions = new CommonActions(page)
    }

    async navigateToLoginPage(url: string) { await this.commonActions.visitPageAndWait(url, 60); }

    async typeUser(user: string) { await this.commonActions.locatorClickAndFill(this.USER_INPUT, user, 1); }

    async typePassword(password: string) { await this.commonActions.locatorClickAndFill(this.PASSWORD_INPUT, password, 1); }

    async clickLogin() { await this.commonActions.getByRoleButton(this.LOGIN_BUTTON, 2); }

    async forceLogin() {
        await this.commonActions.page.waitForTimeout(2000);
        //await this.commonActions.page.reload();
        await this.commonActions.page.waitForLoadState();
        await this.commonActions.page.waitForTimeout(2000);
    }

   
    // Login TEKUS
    async loginTEKUS() {
        const env = new Enviroment('LOGINTEKUS');
        await this.navigateToLoginPage(env.baseURL);
        await this.typeUser(env.username);
        await this.typePassword(env.password);
        await this.clickLogin();
        await this.forceLogin();
    }

 
}