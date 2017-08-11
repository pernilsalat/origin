//features/step_definitions/my_step_definitions.js

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var logInPage = require('../pages/LogInPage');
var agenda = require('../pages/agenda')
var S = require('string');

module.exports = function() {

    this.World = require('../support/world').World;

    this.setDefaultTimeout(30000);

    this.Given(/^I go to (.*)$/, function(site) {
        logInPage.GotoSite(site);
        return S(browser.getCurrentUrl()).include("goodfil");
    });

    this.When(/^I log in$/, function() {
        logInPage.login();
        return S(browser.getCurrentUrl()).include("#");
    });

    this.When(/^I make an apointment$/, function () {
        agenda.makeAppointment();
        return S(browser.getCurrentUrl()).include("search");

    });

    this.Then(/^I can deleat it$/, function () {
       agenda.deleteAppointment()
    });

}
