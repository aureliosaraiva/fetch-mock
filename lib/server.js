import fetch from 'node-fetch';
import stream from 'stream';
import FetchMock from './fetch-mock';
import http from 'http';

const Request = fetch.Request;
const Response = fetch.Response;
const Headers = fetch.Headers;

// FetchMock.global = global;
FetchMock.statusTextMap = http.STATUS_CODES;
FetchMock.stream = stream;

FetchMock.setImplementations({
	Promise: Promise,
	Request: Request,
	Response: Response,
	Headers: Headers
});

const instance =  new FetchMock();
export default instance;
