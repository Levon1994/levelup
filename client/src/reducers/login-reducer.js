export default (state = false, action) => {
    switch (action.type) {
        case 'LOGIN_SELECT':
            return action.payload;
        default:
            return state;
    }
}