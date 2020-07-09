'use strict';

const loadNs = process.hrtime();
const loadMs = new Date().getTime();

const MILLION = BigInt(1e6);
const BILLION = BigInt(1e9);
const THOUSAND = BigInt(1e3);

function nanoseconds() {
    let diffNs = process.hrtime(loadNs);
    return String(BigInt(loadMs) * MILLION + (BigInt(diffNs[0]) * BILLION + BigInt(diffNs[1])));
}

function microseconds() {
    return String(BigInt(nanoseconds()) / THOUSAND);
}

module.exports = nanoseconds;
module.exports.microseconds = module.exports.micro = microseconds;
