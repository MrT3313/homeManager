// AXIOS
    import axios from 'axios'
import { throwStatement } from '@babel/types';

// CREATE ACTION TYPES
    export const LOGIN_START = 'LOGIN_START'
    export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
    export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// ACTION CREATOR
    export const login = loginInfo => {
        console.log('inside login action creator')

        // SEND FIRST ACTION
        return dispatch => {
            dispatch({ type: LOGIN_START })

            // START AXIOS CALL
            axios
                .post(
                    'http://localhost:1313/login',
                    loginInfo
                )
                .then( res => {
                    console.log('res', res )
                    // DISPATCH
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: {
                            data: res.data
                        }
                    })
                })
                .catch( err => {
                    console.log('err', err )
                    // DISPATCH
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: err
                    })
                })
        }
    }