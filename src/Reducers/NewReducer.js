import React from "react";

const init = {
    count: 0
}


function NewReducer(state = init, action) {

    switch (action.type) {
        case "increm":
            return {
                count: state.count + 1
            }

            break;
        case "decrem":
            return {
                count: state.count - 1
            }
            break;
    }

    return state;
}

export default NewReducer;