import {SET_FILTER, Filters} from '../actions/filter-actions';

const filterReducer = (state = Filters.ACTIVE, action) => {
    if (action.type === SET_FILTER) {
        return action.filter;
    } else {
        return state;
    }
};

export default filterReducer;
