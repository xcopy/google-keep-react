export const Layouts = {
    GRID: 'GRID',
    LIST: 'LIST'
};

export const SET_LAYOUT = 'SET_LAYOUT';

export const setLayout = layout => ({
    type: SET_LAYOUT,
    layout
});
