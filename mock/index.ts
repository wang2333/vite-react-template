import { setupWorker } from 'msw/browser';

import userAPI from './handlers/userAPI';

const handlers = [...userAPI];

export const worker = setupWorker(...handlers);
