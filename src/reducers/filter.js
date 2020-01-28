import {SET_FILTER, Filters} from '../actions/FilterActions';

const filter = (state = Filters.ACTIVE, action) => {
    if (action.type === SET_FILTER) {
        return action.filter;
    } else {
        return state;
    }
};

export default filter;
