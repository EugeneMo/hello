import React, {Component} from 'react';

class Stata extends Component {

    render() {
        return (
            <div className="sixteen wide column">
                <div className="ui piled segment">
                    <div className="sc-dash">
                        <h1 className="ui brown centered header">
                            Добрый день, Жека!
                            <div className="sub header">
                                Хотите узнать что нового появилось сегодня? <br/>
                                Мы подготовили краткий отчет по сайту специально для Вас.
                            </div>
                        </h1>
                    </div>

                    <div className="ui four statistics sc-dash">
                            <div className="teal statistic">
                                <div className="value">32</div>
                                <div className="label">Посетители</div>
                            </div>
                            <div className="teal statistic">
                                <div className="value">166</div>
                                <div className="label">Просмотры страниц</div>
                            </div>
                            <div className="teal statistic">
                                <div className="value">5</div>
                                <div className="label">Отзывы</div>
                            </div>
                            <div className="teal statistic">
                                <div className="value">1</div>
                                <div className="label">Заказы</div>
                            </div>
                    </div>

                </div>
            </div>
            
        );
    }
}

export default Stata;