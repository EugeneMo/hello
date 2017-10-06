import React, {Component} from 'react';
import Feedback from './Feedback';
import Header from './Header';
import Stata from './Stata';
import Table from './Table';
import Footer from './Footer';
import './semantic.css';

class App extends Component {

    render() {
        return (
            <div className="pusher">
                <Header />
                <Feedback />
                <Stata />
                <Table />
                <Footer />
            </div>

        );
    }
}

export default App;