import { NormalPage } from './app.po';

describe('normal App', () => {
  let page: NormalPage;

  beforeEach(() => {
    page = new NormalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
