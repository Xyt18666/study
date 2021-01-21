import states from "./states";

export default (state = states, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "add":
            newState.num++;
            break;
        case "setVal":
            newState.num = action.val;
            break;

        default:
            break;
    }

    return newState;
};
