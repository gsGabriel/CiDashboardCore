import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home/home'

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(
        <Home/>,
        document.getElementById('react-app')
    );

    // ReactDOM.render(
    //     <BrowserRouter children={ RoutesModule.routes } />,
    //     document.getElementById('react-app')
    // );
}

renderApp();

// Allow Hot Module Replacement
// if (module.hot) {
//    module.hot.accept('./routes', () => {
//        routes = RoutesModule('./routes').routes;
//        renderApp();
//    });
// }