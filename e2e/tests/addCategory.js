var homePage = require('../pages/home.js');

describe('Welcome Page', function() {
  it('When: The user launches the web application, the user should be redirected to home page', function () {
    homePage.action();
});
