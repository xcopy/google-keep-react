import {SET_LAYOUT, Layouts} from '../actions/layout-actions';

const layoutReducer = (state = Layouts.GRID, action) => {
    if (action.type === SET_LAYOUT) {
        return action.layout;
    } else {
        return state;
    }
};

export default layoutReducer;
