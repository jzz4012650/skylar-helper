module.exports = `import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import <%PageName%> from "pages/<%PageName%>";
import reducers from "pages/<%PageName%>/reducers";

let store = createStore(reducers, applyMiddleware(promiseMiddleware));
let container = document.createElement("div");

container.id = "container";

const <%PageName%>Wrapper = (props) => {
    return (
        <Provider store = {store}>
            <<%PageName%> {...props}/>
        </Provider>
    );
}

render(
    <<%PageName%>Wrapper/>,
    document.body.appendChild(container)
);`
