import React, {Component} from 'react';


class Feedback extends Component {
    render () {
        return (
        <div className="ui main container">
            <div className="ui grid">
                <div className="nine wide column">

                    <div className="ui compact menu">
                        <a className="item">
                            <i className="icon mail"></i> Сообщения
                            <div className="floating ui blue label">5</div>
                        </a>
                        <a className="item">
                            <i className="icon shopping bag"></i> Заказ
                            <div className="floating ui teal label">17</div>
                        </a>
                        <a className="item">
                            <i className="icon text telephone"></i> Звонок
                            <div className="floating ui red label">3</div>
                        </a>
                    </div>
                </div>
                <div className="seven wide column">
                    <div className="ui large breadcrumb">
                        <div className="active section">7admin</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Feedback;








       