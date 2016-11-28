module.exports = `import { createAction } from "redux-actions";

export const SOME_ACTION = "SOME_ACTION";

export const someAction = createAction(SOME_ACTION, param => {
    return {
        key: "value"
    }
});`