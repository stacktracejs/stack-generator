module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/stackframe/dist/stackframe.js',
            'stack-generator.js',
            'spec/spec-helper.js',
            'spec/*-spec.js',
            { pattern: 'spec/fixtures/**', included: false }
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        customLaunchers: {
            Chrome_No_Sandbox: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        browsers: ['PhantomJS'],
        reporters: ['spec', 'saucelabs', 'coverage', 'coveralls'],
        preprocessors: {
            'stack-generator.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage',
            subdir: function(browser) {
                return browser.toLowerCase().split(/[ /-]/)[0];
            }
        },
        singleRun: false
    });
};
