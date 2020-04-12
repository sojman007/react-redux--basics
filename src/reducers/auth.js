const authenticationReducer = (state = {isLogged: false}, action) => {

    switch (action.type) {
        case 'LOGIN':
            state.isLogged = true;
            return {...state};
        default: return {...state};

    }
}


export default authenticationReducer;