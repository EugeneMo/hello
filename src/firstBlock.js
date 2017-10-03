import React, {Component} from 'react';

class firstBlock extends Component {

    render() {
        return (
            <div className="ui fixed menu">
                <div className="ui container">
                    <a href="#" className="header icon item sc-toggle">
                    <i className="sidebar icon"></i>&nbsp;Меню
                    </a>
                    <a href="/" className="item">
                    7Admin
                    </a>
                    <div className="right menu">

                    <div className="ui simple dropdown item">
                        <i className="user icon"></i>&nbsp;Жека <i className="dropdown icon"></i>
                            <div className="menu">
                                <a className="item" href="/" target="_blank">Вернуться на сайт</a>
                                <a className="item" href="">Выйти</a>
                            </div>
                        </div>
                        <a className="item" href="#!"><i className="setting icon"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default firstBlock;