export const isValid = (user = {}) => {
    if (user.email === undefined || user.email === null) {
        return false;
    }
    if (user.password === undefined || user.password === null) {
        return false;
    }
    return true;
}