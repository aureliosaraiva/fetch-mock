'use strict';

import FetchMock from './fetch-mock';
import statusTextMap from './status-text';
const theGlobal = typeof window !== 'undefined' ? window : self;

FetchMock.global = theGlobal;
FetchMock.statusTextMap = statusTextMap;

FetchMock.setImplementations({
	Promise: theGlobal.Promise,
	Request: theGlobal.Request,
	Response: theGlobal.Response,
	Headers: theGlobal.Headers
});

const instance = new FetchMock();
export  default instance;
