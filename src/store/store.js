import {compose, createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';

//root-reducer - combination of all reducers
import { rootReducer } from './root-reducer';

const middleWares = [ logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, composedEnhancers);


