import { Inventario19s.OrgPage } from './app.po';

describe('inventario19s.org App', () => {
  let page: Inventario19s.OrgPage;

  beforeEach(() => {
    page = new Inventario19s.OrgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
