import React, {Component} from 'react';

class Table extends Component {

    render() {
        return (
            <div className="sixteen wide column">
            <div className="ui piled segment">
                <table className="ui compact celled definition table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Registration Date</th>
                                    <th>E-mail address</th>
                                    <th>Premium Plan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="collapsing">
                                        <div className="ui fitted slider checkbox">
                                            <input type="checkbox" /> <label></label>
                                        </div>
                                    </td>
                                    <td>John Lilki</td>
                                    <td>September 14, 2013</td>
                                    <td>jhlilk22@yahoo.com</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td className="collapsing">
                                        <div className="ui fitted slider checkbox">
                                            <input type="checkbox"/> <label></label>
                                        </div>
                                    </td>
                                    <td>Jamie Harington</td>
                                    <td>January 11, 2014</td>
                                    <td>jamieharingonton@yahoo.com</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td className="collapsing">
                                        <div className="ui fitted slider checkbox">
                                            <input type="checkbox"/> <label></label>
                                        </div>
                                    </td>
                                    <td>Jill Lewis</td>
                                    <td>May 11, 2014</td>
                                    <td>jilsewris22@yahoo.com</td>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                            <tfoot className="full-width">
                                <tr>
                                    <th></th>
                                        <th colspan="4">
                                        <div className="ui right floated small primary labeled icon button">
                                            <i className="user icon"></i> Add User
                                        </div>
                                        <div className="ui small button">
                                            Approve
                                        </div>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
            </div>
            </div>
        );
    }
}

export default Table;