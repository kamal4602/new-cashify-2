import { CashifyPage } from './app.po';

describe('cashify App', function() {
  let page: CashifyPage;

  beforeEach(() => {
    page = new CashifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
