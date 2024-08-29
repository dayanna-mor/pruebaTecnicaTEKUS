import { Page } from "playwright-core";
export class CommonActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // goto url
    async visitPageAndWait(page: any, timeOutSeconds: number) {
        await this.page.goto(page, { timeout: timeOutSeconds * 1000 })
    }

    // getByRoleButton // click a un botón
    async getByRoleButton(name: string, seconds: number) {
        const locator = this.page.getByRole("button", { name }).first();
        await locator.click()
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleButton(iframe: any, name: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByRole("button", { name }).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByRoleOption // click a opción de un dropdown
    async getByRoleOption(name: string, seconds: number) {
        const locator = this.page.getByRole("option", { name, exact: true }).first();
        await locator.click()
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleOption(iframe: any, name: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByRole("option", { name }).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByRoleTab // click a una pestaña dentro de tab bar
    async getByRoleTab(name: string, seconds: number) {
        const locator = this.page.getByRole("tab", { name }).first();
        await locator.click()
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleTab(iframe: any, name: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByRole("tab", { name }).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByRoleArticle // click a un artículo
    async getByRoleArticle(name: string, seconds: number) {
        const locator = this.page.getByRole("article", { name }).first();
        await locator.click()
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleArticle(iframe: any, name: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByRole("article", { name }).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByRoleCheckbox // marca un checkbox como check (true)
    async getByRoleCheckbox(name: string, seconds: number) {
        const locator = this.page.getByRole("checkbox", { name }).first();
        await locator.getByRole("checkbox").check();
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleCheckbox(iframe: any, name: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByRole("checkbox", { name }).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByPlaceholder // click en placeholder y rellenar
    async getByPlaceholderAndFill(placeholder: string, text: string, seconds: number) {
        const locator = this.page.getByPlaceholder(placeholder).first();
        await locator.click();
        await locator.fill(text);
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeGetByPlaceholder(iframe: any, placeholder: string, text: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const locator = frame.getByPlaceholder(placeholder).first();
        await locator.click();
        await locator.fill(text);
        await this.page.waitForTimeout(seconds * 1000)
    }

    // placeholderClick // click a un elemento segun el placeholder
    async placeholderClick(text: string, seconds: number) {
        const locator = this.page.getByPlaceholder(text).first();
        await locator.click()
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframePlaceholderClick(iframe: any, text: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByPlaceholder(text).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }
    
    // getByLabel // click en label
    async getByLabel(label: string, seconds: number) {
        const locator = this.page.getByLabel(label).first();
        await locator.click();
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeGetByLabel(iframe: any, label: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const locator = frame.getByLabel(label).first();
        await locator.click();
        await this.page.waitForTimeout(seconds * 1000)
    }

    // getByLabel // click en label y rellenar
    async getByLabelAndFill(label: string, text: string, seconds: number) {
        const locator = this.page.getByLabel(label).first();
        await locator.click();
        await locator.fill(text);
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeGetByLabelAndFill(iframe: any, label: string, text: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const locator = frame.getByLabel(label).first();
        await locator.click();
        await locator.fill(text);
        await this.page.waitForTimeout(seconds * 1000)
    }

    // locatorClick // click en un locator
    async locatorClick(locator: string, seconds: number) {
        const selector = this.page.locator(locator).first();
        await selector.click();
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeLocatorClick(iframe: any, locator: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const selector = frame.locator(locator).first();
        await selector.click();
        await this.page.waitForTimeout(seconds * 2000)
    }

    // locatorClickAndFill // click y rellenar un locator
    async locatorClickAndFill(locator: string, text: string, seconds: number) {
        const selector = this.page.locator(locator).first();
        await selector.click();
        await selector.type(text)
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeLocatorClickAndFill(iframe: any, locator: string, text: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const selector = frame.locator(locator).first();
        await selector.click();
        await selector.fill(text)
        await this.page.waitForTimeout(seconds * 1000)
    }

    // locatorPressKeyboard // pulsar una tecla
    async locatorPressKeyboard(locator: string, keyboard: string, seconds: number) {
        const selector = this.page.locator(locator).first();
        await selector.press(keyboard);
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeLocatorPressKeyboard(iframe: any, locator: string, keyboard: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const selector = frame.locator(locator).first();
        await selector.press(keyboard);
        await this.page.waitForTimeout(seconds * 1000)
    }

    // locatorOption // seleccionar opción de un locator
    async locatorOption(locator: string, option: string, seconds: number) {
        const selector = this.page.locator(locator);
        await selector.selectOption(option);
        await this.page.waitForTimeout(seconds * 1000)
    }
    async iframeLocatorOption(iframe: any, locator: string, option: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const selector = frame.locator(locator);
        await selector.selectOption(option);
        await this.page.waitForTimeout(seconds * 1000)
    }

    // clickByText// click a un elemento segun el texto
    async clickByText(text: string, seconds: number) {
        const locator = this.page.getByText(text).first();
        await locator.click()
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeClickByText(iframe: any, text: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first()
        const frameLocator = frame.getByText(text).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByRoleType // click a un elemento según tipo de Role
    async getByRoleType(type: any, name: string, seconds: number) {
        const locator = this.page.getByRole(type, { name, exact: true }).first();
        await locator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleType(iframe: any, type: any, name: any, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first();
        const frameLocator = frame.getByRole(type, { name }).first();
        await frameLocator.click();
        await this.page.waitForTimeout(seconds * 1000);
    }

    // getByRoleType // click a un elemento según tipo de Role y rellenar
    async getByRoleTypeAndFill(type: any, name: string, text: string, seconds: number) {
        const locator = this.page.getByRole(type, { name, exact: true }).first();
        await locator.click();
        await locator.fill(text);
        await this.page.waitForTimeout(seconds * 1000);
    }
    async iframeGetByRoleTypeAndFill(iframe: any, type: any, name: any, text: string, seconds: number) {
        const frame = this.page.frameLocator('internal:attr=[title="' + iframe + '"i]').first();
        const frameLocator = frame.getByRole(type, { name }).first();
        await frameLocator.click();
        await frameLocator.fill(text);
        await this.page.waitForTimeout(seconds * 1000);
    }
}