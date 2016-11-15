const INITIATE_GREETING = 'INITIATE_GREETING';

const initialState = {
    greeting: ''
}

export default function greeting (state = initialState, action) {
    switch ( action.type ) {
        case INITIATE_GREETING :
            return {
                ...state,
                text: action.text
            }

        default:
            return state
    }
}
