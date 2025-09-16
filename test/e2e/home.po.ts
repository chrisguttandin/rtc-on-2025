import { Locator, Page, Response } from '@playwright/test';

export class Home {
    constructor(private _page: Page) {}

    public getAppComponent(): Locator {
        return this._page.locator('rto-app');
    }

    public getHeadline(): Locator {
        return this._page.locator('rto-app h1');
    }

    public getSubHeadline(): Locator {
        return this._page.locator('rto-app h2');
    }

    public navigateTo(): Promise<null | Response> {
        return this._page.goto('./');
    }
}
