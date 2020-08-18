import React from 'react';
import {Router, Link} from 'react-router-dom';
import {useHistory} from "react-router";
import '../styles/components/App.css';


function App() {
    const history = useHistory();
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the TO-DO-APP!!!</h1>
                <h1>Let's start to plan your life together!!!</h1>
            </header>
            <Router history={history}>
                <Link to='/taskPage'>
                    <div className='appLinks'>
                        Your Tasks
                    </div>
                </Link>
                <Link to='/userPage'>
                    <div className='appLinks'>
                        Home
                    </div>
                </Link>
            </Router>

        </div>
    );
}

export default App;
