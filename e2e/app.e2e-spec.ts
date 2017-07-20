import { AngularAotTutorialPage } from './app.po';

describe('angular-aot-tutorial App', () => {
  let page: AngularAotTutorialPage;

  beforeEach(() => {
    page = new AngularAotTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
