module.exports = `import "./index.less";

import React, { Component } from "react";
import { connect } from "react-redux"
import * as actions from "./actions";

class <%PageName%> extends Component {

    render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

export default connect(state => state, actions)(<%PageName%>);
`