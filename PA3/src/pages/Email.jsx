import {Component} from 'react';

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {emailValue: "", validationStatus: ""}
    }

    validateEmail() {
        const emailRegex = /.+@.+\.(com|edu)/;
        let validationMessage;
        if (emailRegex.test(document.getElementById('email').value)) {
            validationMessage = "Email successfully recorded.";
        } else {
            validationMessage = "Invalid email address.";
        }
        this.setState({validationStatus: validationMessage});
    }

    render() {
        return (
            <div className="lite-container">
                <label>
                    Email
                    <input value={this.state.emailValue} onChange={e => this.setState({emailValue: e.target.value})} id="email"/>
                </label>
                <button onClick={() => this.validateEmail()}>Submit</button>
                <div id="email-validation-status">
                    {this.state.validationStatus}
                </div>
            </div>
        );
    }
}

export default Email;