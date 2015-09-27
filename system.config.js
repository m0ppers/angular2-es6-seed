System.config({
    babelOptions: {
        stage: 1
    },
    transpiler: 'babel',
    paths: {
        'angular2/*': 'node_modules/angular2/*.js',
        'rx': 'node_modules/angular2/node_modules/rx/dist/rx.all.js',
    },
    meta: {
        'node_modules/angular2/node_modules/reflect-metadata/Reflect.js': {
            // mop: otherwise systems 
            format: 'global'
        }
    },
    // mop: alpha, yet already legacy :@ (angular2 uses defaultJSExtensions which is already deprecated
    packages: {
        'node_modules/angular2': {
            defaultExtension: 'js',
        },
    }
});
