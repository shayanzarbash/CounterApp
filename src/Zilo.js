import React, { useContext } from 'react';
import TextContext from './Context/TestContext';
import AuthContext from './Context/Auth';



// function Zilo() {


//     const ZiloContext = useContext(TextContext);

//     return (
//         <div>
//             <TextContext.Consumer>
//                 {
//                     context => (
//                         <div>
//                             {context.adds}
//                         </div>
//                     )

//                 }
//             </TextContext.Consumer>
//         </div>
//     )
// }
class Zilo extends React.Component {

    static contextType = TextContext;

    componentDidMount() {
        console.log(this.context)
    }


    render() {




        return (
            <div>
                <div>Zilllllllo {this.context.adds}</div>

            </div>
        )
    }
}


export default Zilo;