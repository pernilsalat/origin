"use strict"

this.World = require('../support/world').World;

module.exports = {
    userHomePageElements: {
        search: element(by.className('nav-search-input'))
    },

    search: function(text) {
        this.userHomePageElements.search.sendKeys(text);
    }
}