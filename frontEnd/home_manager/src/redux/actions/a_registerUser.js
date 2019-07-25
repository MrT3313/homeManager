// CREATE ACTION TYPES
    export const REGISTER_START = 'REGISTER_START'
    export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
    export const REGISTER_FAILURE = 'REGISTER_FAILURE'

// ACTION CREATOR
    export const registerUser = registerInfo => {
        console.log('inside registerUser action creator')

        // SEND FIRST ACTION
        return dispatch => {
            dispatch({ type: REGISTER_START })

            // START AXIOS CALL
            axios
                .post(
                    'http://localHost:1313',
                    registerInfo
                )
                .then( res => {
                    console.log('res', res )
                    

                    // DISPATCH
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: {
                            data: res.data
                        }
                    })
                })
                .catch( err => {
                    // DISPATCH
                    dispatch({
                        type: REGISTER_FAILURE,
                        payload: err
                    })
                })
            
        }

    }
