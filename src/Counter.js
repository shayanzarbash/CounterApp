import React from 'react';
import { connect } from 'react-redux';
import './App.css';


class Counter extends React.Component {

    state = {
        count: 0
    }


    increm = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrem = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {




        return (
            <>
                <div>
                    <h1 style={{ textAlign: "center" }}>Counter App</h1>
                    <div className="parent-btn">
                        <button onClick={() => { this.props.dispatch({ type: "increm" }) }}>
                            Increment
            </button>

                        <span>
                            {this.props.count}
                        </span>


                        <button onClick={() => { this.props.dispatch({ type: "decrem" }) }}>Decrement</button>
                    </div>
                </div>
            </>

        )
    }
}

const MapStateToProps = (state) => {
    return {
        count: state.count
    }
}



export default connect(MapStateToProps)(Counter);