import {Component, Fragment} from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                    </tr>
                    <tr>
                        <td><a href="https://www.worldometers.info/coronavirus/country/us/">United States</a></td>
                        <td>20,636,663</td>
                        <td>351,580</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.worldometers.info/coronavirus/country/uk/">United Kingdom</a></td>
                        <td>2,662,699</td>
                        <td>75,137</td>
                    </tr>
                    <tr>
                        <td><a href="https://www.worldometers.info/coronavirus/country/taiwan/">Taiwan</a></td>
                        <td>812</td>
                        <td>7</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;