/**
 * Usage example for the config-rules.ts 
 * Here we import the type from the config-rules.ts
 */
import type { ServerConfig } from "./config-rules";

/**
 * Here, the function validateServerConfig takes in a ServerConfig and returns a boolean
 * It validates the ServerConfig by checking if the port, host, and timeout are valid numbers
 */
function validateServerConfig(config: ServerConfig): boolean{
    if(typeof config.port !== 'number' || config.port <= 0){
        return false;
    }
    if(typeof config.host !== 'string' || config.host.trim()===''){
        return false;
    }
    if(typeof config.timeout !== 'number' || config.timeout <= 0){
        return false;
    }

    return true;
}


/**
 * Here, we create a ServerConfig object with the properties of port, host,
 *  timeout, debug, ssl, and sslConfig
 */
const testConfig: ServerConfig = {
    port: 8080,
    host: 'localhost',
    timeout: 10000,
    debug: true,
    ssl: false,
    sslConfig: {
        key: '',
        cert: ''
    }
}

/**
 * Here, we test the validateServerConfig function
 */

const result = validateServerConfig(testConfig);
console.log(result);