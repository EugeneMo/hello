import React, {Component} from 'react';
import ScndBlock from './scndBlock';
import FirstBlock from './firstBlock';
import Body from './Body';
import Table from './Table';
import Footer from './Footer';
import './semantic.css';

class App extends Component {

    render() {
        return (
            <div className="pusher">
                <div class="ui fixed menu">
                    <div class="ui container">
                        <FirstBlock />
                            <ScndBlock />
                            <Body />
                            <Table />
                            <Footer />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;