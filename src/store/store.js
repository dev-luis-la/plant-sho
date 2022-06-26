import {compose, createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';

import { rootReducer } from '../utils/firebase/reducer/root-reducer';

//root-reducer - combination of all reducers

const middleWares = [ logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, middleWares);


