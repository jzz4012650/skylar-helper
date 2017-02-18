module.exports = `import { handleActions } from "redux-actions";
import { SOME_ACTION } from "../actions";

const defaultProps = {
    // your states here
}

export default handleActions({
    [SOME_ACTION]: (state, action) => {
        // handle actions.payload here
        return {
            ...state,
            // new state properties here
        }
    }
}, defaultProps);`