// IMPORT ACTION TYPES
    import {
        REGISTER_START,
        REGISTER_SUCCESS,
        REGISTER_FAILURE,
    } from '../actions/a_registerUser.js/index.js'

// INITIAL STATE
    const initialState = {
        is_Registering: false,
        error: ''
    }

// REDUCER
    export const login_reducer = (state = initialState, action) => {
        switch( action.type ) {
            case REGISTER_START:
                return {
                    ...state, 

                    is_Registering: true,
                    error: ''
                }
            case REGISTER_SUCCESS:
                    return {
                        ...state, 

                        is_Registering: false,
                        error: ''
                    }
            case REGISTER_FAILURE:
                return {
                    ...state,
                    
                    is_Registering: false,
                    error: 'Registration Failure'
                }

            // DEFAULT 
            default: 
                return state;
        }
    }