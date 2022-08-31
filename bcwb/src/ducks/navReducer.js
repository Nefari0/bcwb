// This reducer allows for global tracking of current view. The main purpose is so the navbar will not "highlight"
// stop highlighting elements once they are no longer being viewed

const initialState = {
    currentCategory:null
};

const CHANGE_VIEW = 'CHANGE_VIEW';

export function changeView(val) {
    return {
        type: CHANGE_VIEW,
        payload:val
    };
};

export default function navReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                currentCategory:action.payload
            };
        default:
            return state;
    }
}
