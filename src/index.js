import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootRedux from './reducer/rootRedux.js';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import BasicExample from './App.js';

/*路由组件-----》*/
import { Route, Link, Switch } from 'react-router-dom';

// import Home  from './page/index.js';
// import Contact  from './page/contact/index.js';
// import About from './page/about/index.js';
// import CounterReactRedux  from './components/counter/CounterReactRedux.js';
// import ReduxTest from './components/ReactAndRedux.js';
/*路由组件《《*/


const store = createStore(rootRedux);


//渲染函数中的结构外部嵌套Provier并添加store
ReactDOM.render(
    <Provider store={store}>
           <BasicExample />
    </Provider>,
    document.getElementById('root')
    );