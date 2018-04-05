// spec.js
describe('Bian Demo App', function() {
    it('should have a title', function() {
      browser.get('http://localhost:3000/NGJS/main');
      expect(browser.getTitle()).toEqual('bian');
    });
  });

  describe('AngularJS Single Page App', function() {
    it('should load and compile correct template', function() {
      browser.get('http://localhost:3000/NGJS/SPA');
      element(by.linkText('Moby: Ch1')).click();
      var content = element(by.css('[ng-view]')).getText();
      expect(content).toMatch(/controller: ChapterController/);
      expect(content).toMatch(/Book Id: Moby/);
      expect(content).toMatch(/Chapter Id: 1/);

      element(by.partialLinkText('Scarlet')).click();

      content = element(by.css('[ng-view]')).getText();
      expect(content).toMatch(/controller: BookController/);
      expect(content).toMatch(/Book Id: Scarlet/);
    });
  });