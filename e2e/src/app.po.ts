import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateToBase(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToLogin(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/login') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-title h3')).getText() as Promise<string>;
  }

  navTo(href: string): Promise<void> {
    return element(by.css(`[href="${href}"]`)).click() as Promise<void>;
  }

  async logIn(user: string, password: string): Promise<void> {
    if (await element(by.css('.login')).isPresent()) {
      return this.navigateToLogin().then(r => {
        element(by.id('username')).sendKeys(user);

        element(by.id('password')).sendKeys(password);

        element(by.css('.form')).submit();
      });
    }
  }

  getTableRowCount(): Promise<number> {
    return element.all(by.css('.table tr')).count() as Promise<number>;
  }

  clickCreateButton(): Promise<void> {
    return element(by.css('.create')).click() as Promise<void>;
  }

  submitForm(values: any): Promise<void> {
    Object.keys(values).forEach(async (key) => {
      let value = values[key];

      await element(by.id(key)).sendKeys(value);
    });

    return element(by.css('.form')).submit() as Promise<void>;
  }

  existTableRow(id: string): Promise<boolean> {
    return element(by.id(id)).isPresent() as Promise<boolean>;
  }

  clickEditButton(id: string): Promise<void> {
    return element(by.id(id)).element(by.css('.edit')).click() as Promise<void>;
  }

  clickDeleteButton(id: string): Promise<void> {
    return element(by.id(id)).element(by.css('.delete')).click() as Promise<void>;
  }

  clickConfirmButton(): Promise<void> {
    return element(by.css('.confirm')).click() as Promise<void>;
  }

  toastSuccess(): Promise<boolean> {
    return element(by.id('toast-container')).element(by.css('.toast-success')).isPresent() as Promise<boolean>;
  }

  toastSuccessMessage(): Promise<string> {
    return element.all(by.css('.toast-success'))
      .first()
      .element(by.css('.toast-message')).getText() as Promise<string>;
  }
}
