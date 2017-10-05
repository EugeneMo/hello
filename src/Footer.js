import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="ui inverted vertical footer segment">
            <div className="ui container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    <div className="sixteen wide column">
                        <h4 className="ui inverted centered header">
                            Made by <a href="http://7code.info">7code</a>,
                            with <i className="empty heart red icon sc-heart"></i> and caffeine
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;