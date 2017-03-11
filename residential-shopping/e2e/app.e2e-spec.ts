import { ResidentialShoppingPage } from './app.po';

describe('residential-shopping App', () => {
  let page: ResidentialShoppingPage;

  beforeEach(() => {
    page = new ResidentialShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
