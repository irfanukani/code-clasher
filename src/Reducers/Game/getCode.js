export const getCode = (code = "", action) => {
    const { type, payload } = action;
    switch (type) {
        case "CODE_STORE":
            return payload;

        default:
            return code;
    }
}