import { ClimatempoPage } from './app.po';

describe('climatempo App', () => {
  let page: ClimatempoPage;

  beforeEach(() => {
    page = new ClimatempoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
