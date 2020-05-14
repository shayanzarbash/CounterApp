import React, { createContext, useContext } from 'react';
import AddContext from './Context/Context';
import AuthContext from './Context/Auth';
import AppReducer from './Reducers/AppReducer';

function Lido() {


    const globalContext = useContext(AddContext);
    const gloContext = useContext(AuthContext);

    console.log(globalContext);

    return (
        <>


        
            <div className="test">
                {globalContext.add}
            </div>
            <div>
                <h3>
                    ffefrefrg
                    {gloContext.oil}
                </h3>
            </div>
        </>
    )


}

export default Lido;