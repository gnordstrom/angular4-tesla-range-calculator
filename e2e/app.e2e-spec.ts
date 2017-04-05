import { Angular4TeslaRangeCalculatorPage } from './app.po';

describe('angular4-tesla-range-calculator App', function() {
  let page: Angular4TeslaRangeCalculatorPage;

  beforeEach(() => {
    page = new Angular4TeslaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
