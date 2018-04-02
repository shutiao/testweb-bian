// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://localhost:3000/NGJS/main');
      expect(browser.getTitle()).toEqual('bian');
    });
  });