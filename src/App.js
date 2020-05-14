import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';
import NewReducer from "./Reducers/NewReducer";




// export const ThemeContext = createContext();


function App() {



  const store = createStore(NewReducer)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="col col-lg-8 col-md-6 col-sm-8">
              <div style={{ backgroundColor: "red" }}>
                < Provider store={store} >
                  <Counter />
                </Provider >
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-4">
              <div style={{ backgroundColor: "blue" }}>

              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div style={{ backgroundColor: "pink" }}>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
