const LOG_IN = 'LOG_IN';
const SUCCESS_LOG_IN = 'SUCCESS_LOG_IN';
const FAILED_LOG_IN = 'FAILED_LOG_IN';

const GET_USER = 'GET_USER';
const SUCCESS_GET_USER = 'SUCCESS_GET_USER';
const FAILED_GET_USER = 'FAILED_GET_USER';

const GET_JOGS = 'GET_JOGS';
const SUCCESS_GET_JOGS = 'SUCCESS_GET_JOGS';
const FAILED_GET_JOGS = 'FAILED_GET_JOGS';

// LOG_IN
export const requestLogIn = () => ({ type: LOG_IN });
export const successLogIn = (payload) => ({ type: SUCCESS_LOG_IN, payload });
export const failedLogIn = () => ({ type: FAILED_LOG_IN });

// GET_USER
export const requestGetUser = () => ({ type: GET_USER });
export const successGetUser = (payload) => ({ type: SUCCESS_GET_USER, payload });
export const failedGetUser = () => ({ type: FAILED_GET_USER });

// SYNC_JOGS
export const requestGetJogs = () => ({ type: GET_JOGS });
export const successGetJogs = (payload) => ({ type: SUCCESS_GET_JOGS, payload });
export const failedGetJogs = () => ({ type: FAILED_GET_JOGS });
