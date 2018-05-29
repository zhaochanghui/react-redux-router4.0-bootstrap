import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootRedux from './reducer/rootRedux.js';

import BasicExample from './App.js';


const store = createStore(rootRedux);


//渲染函数中的结构外部嵌套Provier并添加store
ReactDOM.render(
    <Provider store={store}>
           <BasicExample />
    </Provider>,
    document.getElementById('root')
    );