"use strict";

let World = function World (callback) {

    let self = this;
    this.domainUrl = void 0;
    this.todayDate = "";

    this.setBaseUrl = function (domainUrl) {
        self.domainUrl = domainUrl;
    }
};

module.exports.World = World;
