import * as authActions from "../authReducer/action";
import * as themeActions from "../themingReducer/action";

const actions = {
    ...authActions,
    ...themeActions
};

export default actions;