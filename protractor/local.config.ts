import { Config, browser } from 'protractor';
import { reporter } from '../helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  SELENIUM_PROMISE_MANAGER: 'false',
  capabilities: {
    browserName: 'chrome',
    count: 1,
    chromeOptions: {
      args: ['--headless']
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
