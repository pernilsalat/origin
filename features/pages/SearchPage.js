"use strict"

this.World = require('../support/world').World;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = {
    searchPageElements: {
        results: element.all(by.className('movie none'))
    },

    checkSearch: function() {
        print(todoList.get(5).getText());
        expect(todoList.count()).to.eventually.equal(6);
    }
}