/**
 * Created by ChaithraRao on 1/30/16.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['spec.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    'framework': 'jasmine',

    'jasmineNodeOpts': {
        'showColors': true,
        'defaultTimeoutInterval': 60000
    },

    'onPrepare': function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

        //Explicitly tells protractor not to wait for angular components to be loaded
        //because we are testing a non-angular website
        browser.ignoreSynchronization = true;
    }
};

