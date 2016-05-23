
import EventBus from '../event/EventBus'

const instrument = (state, action) => {
    switch (action.type) {
        case 'ADD_INSTRUMENT':
            EventBus.dispatch('INSTRUMENT_ADDED',this);
            return {
                name: action.name,
            }
        /*case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })*/

        default:
            return state
    }
}






const basicReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INSTRUMENT':
            return [
                ...state,
                instrument(undefined, action)
            ]
        default:
            return state
    }
}

export default basicReducer