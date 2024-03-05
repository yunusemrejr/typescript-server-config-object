"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateServerConfig(config) {
    if (typeof config.port !== 'number' || config.port <= 0) {
        return false;
    }
    if (typeof config.host !== 'string' || config.host.trim() === '') {
        return false;
    }
    if (typeof config.timeout !== 'number' || config.timeout <= 0) {
        return false;
    }
    return true;
}
var testConfig = {
    port: 8080,
    host: 'localhost',
    timeout: 10000,
    debug: true,
    ssl: false,
    sslConfig: {
        key: '',
        cert: ''
    }
};
var result = validateServerConfig(testConfig);
console.log(result);
