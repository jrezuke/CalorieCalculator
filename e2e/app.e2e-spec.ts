import { CalorieCalculatorPage } from './app.po';

describe('calorie-calculator App', () => {
  let page: CalorieCalculatorPage;

  beforeEach(() => {
    page = new CalorieCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
