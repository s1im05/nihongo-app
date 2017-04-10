import { NihongoPage } from './app.po';

describe('nihongo App', () => {
  let page: NihongoPage;

  beforeEach(() => {
    page = new NihongoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
