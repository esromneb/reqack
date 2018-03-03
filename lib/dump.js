'use strict';

const fs = require('fs-extra');
const path = require('path');
const fhyperDot = require('../lib/fhyper-dot');
const fhyperV = require('../lib/fhyper-verilog');
// const fhyperIV = require('../lib/fhyper-instance-verilog');

module.exports = function (g, name, custom, done) {
    fs.outputFile(
        path.resolve('build', name + '.dot'),
        fhyperDot(g),
        () => fs.outputFile(
            path.resolve('build', name + '.v'),
            fhyperV(g, custom),
            // () => fs.outputFile(
            //     path.resolve('build', name + '.inst.v'),
            //     fhyperIV(g),
            done
            // )
        )
    );
};