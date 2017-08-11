"use strict"

this.World = require('../support/world').World;

module.exports = {
    logInPageElements: {
        Email:  element(by.id('username')),
        Pass:   element(by.id('password')),
        SignIn: element(by.css("#login-button > button")),
    },

    GotoSite: function(site){
        browser.get(site);
    },

    login: function(email='qadoctoraliaes@gmail.com', pass='doctoralia') {
        let page = this.logInPageElements;
        browser.wait(EC.elementToBeClickable(page.Email), 30000);
        page.Email.sendKeys(email);
        page.Pass.sendKeys(pass);
        page.SignIn.click();
    }
}