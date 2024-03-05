/**
 * The server configuration's type system is determined here, therefore, when using this new data type,
 * you will need to make sure your parameters are correct, in terms of their data tpes.
 */
export type ServerConfig = {
    port: number;
    host: string;
    timeout: number;
    debug: boolean;
    ssl: boolean;
    sslConfig: {
        key: string;
        cert: string;
    }
}