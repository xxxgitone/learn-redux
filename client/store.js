import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//为默认数据合并成一个对象
const defaultState = {
	//posts: posts,
	posts,
	comments
}

//配合使用Redux DevTools
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f 
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
