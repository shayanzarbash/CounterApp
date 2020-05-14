import React from 'react';


function TestReducer(state, action) {


    console.log(state);

    switch (action.type) {

        case "add":
            return (
                <div>nooooom</div>
            )

    }

}

export default TestReducer;