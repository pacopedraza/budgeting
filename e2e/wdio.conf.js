exports.config = {

    /**
     * server configurations
     */
    maxInstances: 1,
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './e2e/tests/specs/*.spec.js'
    ],
    exclude: [
        //'tests/e2e/specs/multibrowser/**',
        //'tests/e2e/specs/mobile/**'
    ],

    /**
     * capabilities
     */
     capabilities: [{
       browserName: 'chrome'
     }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    sync: true,
    coloredLogs: true,
    screenshotPath: './e2e/tests/screenshots',
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    framework: 'jasmine',

    reporters: ['spec'],
    reporterOptions: {
    outputDir: './'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 9999999
    },
    // Hooks
    onPrepare: function() {
        console.log('Running end2end tests');
    },
    onComplete: function() {
        console.log('Finished!');
    }

};
