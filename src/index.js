import ReactDOM from 'react-dom';
import Header from "./header"
import Body from './body';
import Mobile from './mobile';

function App() {
    return(
        <>
            <Header/>
            <Body/>
            <Mobile/>
        </>
    );
}

ReactDOM.render(<App/>,document.querySelector(".root"));