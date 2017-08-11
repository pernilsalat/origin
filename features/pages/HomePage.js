'use strict'

this.World = require('../support/world').World;

module.exports = {
    homePageElements: {
        logInWithEmail: element(by.css('.session-text-link'))
    },

    GotoSite: function(site){
        browser.get(site);
    },

    clickToLogin: function() {
        console.log("gonnna try to click button login");
        this.homePageElements.logInWithEmail.click().then(()=>{
            console.log("clicking button login");
        })
    }
}