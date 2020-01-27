import {SET_FILTER, Filters} from '../actions/FilterActions';

const filter = (state = Filters.ACTIVE, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default filter;
