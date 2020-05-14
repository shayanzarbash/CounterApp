import React from 'react';


export const init = {
    count: 0
};

function AppReducer(state, action) {

    switch (action.type) {

        case "add":

            return {
                count: state.count + 1
            }
            break;

        case "mines":
            return {
                count: state.count - 1
            }

            break;
        case "reset":
            return init
            break;
        default:
            return init;


    }




}

export default AppReducer;