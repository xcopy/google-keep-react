export const Filters = {
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
    DELETED: 'DELETED'
};

export const SET_FILTER = 'SET_FILTER';

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
});
