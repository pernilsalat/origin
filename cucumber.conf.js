//cucumber.conf.js
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to this directory.
    specs: [
        'features/*.feature'
    ],

    onPrepare: function(){
        browser.manage().window().maximize();
        global.EC = protractor.ExpectedConditions;
    },

    baseURL: 'http://127.0.0.1:8080',

    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true,
        keepAlive: false
    }
};