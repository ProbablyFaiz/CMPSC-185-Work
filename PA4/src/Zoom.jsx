import React, {Component} from 'react';

const BACKEND_URL = "http://localhost:5000/tasks"

class Zoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: [],
            showList: true,
            mTitle: "",
            mDay: new Date(new Date().getTime() + 86400000).toISOString().split('T')[0],
            mLink: "",
            mImportant: false,
            errorMessage: undefined
        };
    }

    componentDidMount() {
        this.getMeetings();
    }

    getMeetings() {
        fetch(BACKEND_URL).then(async r => {
            const responseJson = await r.json();
            this.setState({meetings: responseJson});
        })
    }

    onSaveMeeting() {
        const errors = [];
        if (this.state.mTitle.length <= 0 || this.state.mTitle.length > 30) errors.push("Title length must be between 1 and 30 characters.");
        if (new Date(this.state.mDay) < new Date()) errors.push("Date cannot be in past.");
        if (!this.state.mLink.includes("zoom")) errors.push("Invalid Zoom link.");
        if (errors.length > 0) {
            const errorMessage = errors.reduce((msg, err, i) => i === 0 ? msg + err : msg + `\n${err}`);
            this.setState({errorMessage: errorMessage});
            return;
        }
        const dbObject = {
            important: this.state.mImportant,
            title: this.state.mTitle,
            day: this.state.mDay,
            textInfor: this.state.mLink,
        }
        const fetchUrl = this.state.mId === 0 ? BACKEND_URL : `${BACKEND_URL}/${this.state.mId}`
        fetch(fetchUrl, {
            method: this.state.mId === 0 ? 'POST' : 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dbObject)
        }).then(async r => {
            const responseJson = await r.json();
            this.setState(prevState => ({meetings: [...prevState.meetings, responseJson]}))
        })
        this.resetFormState();
        this.setState({
            errorMessage: "Meeting created successfully."
        });
    }

    onDeleteMeeting(meetingId) {
        fetch(`${BACKEND_URL}/${meetingId}`, {method: 'DELETE'}).then(() => {
            this.setState(prevState => ({meetings: prevState.meetings.filter(m => m.id !== meetingId)}));
        });
    }

    onMeetingDoubleClick(meetingId) {
        const meeting = this.state.meetings.find(m => m.id === meetingId);
        this.setState({
            showList: false,
            mId: meeting.id,
            mTitle: meeting.title,
            mDay: new Date(meeting.day).toISOString().split('T')[0],
            mLink: meeting.textInfor,
            mImportant: Boolean(meeting.important)
        });
    }

    resetFormState() {
        this.setState({
            mId: 0,
            mTitle: "",
            mDay: new Date(new Date().getTime() + 86400000).toISOString().split('T')[0],
            mLink: "",
            mImportant: false,
        });
    }

    render() {
        return (
            <div style={{marginLeft: "10px"}}>
                <h1>Zoom Meeting Manager</h1>
                <button onClick={() => {
                    this.setState(prevState => ({showList: !prevState.showList, errorMessage: ""}));
                    this.resetFormState();
                }}>
                    {this.state.showList ? "Create Meeting" : "Full Schedule"}
                </button>
                <br/>
                <br/>
                {this.state.showList && this.state.meetings.length === 0 && <div>
                    No meetings available.
                </div>}
                {this.state.showList && this.state.meetings.length > 0 && <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Link</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.meetings.map(meeting =>
                        <tr key={meeting.id} onDoubleClick={() => this.onMeetingDoubleClick(meeting.id)}
                            className={meeting.important ? "important-meeting" : ""}>
                            <td>{meeting.title}</td>
                            <td>{meeting.day}</td>
                            <td><a href={meeting.textInfor}>Link</a></td>
                            <td><i className="fa fa-trash" onClick={() => this.onDeleteMeeting(meeting.id)}/></td>
                        </tr>
                    )}
                    </tbody>
                </table>}
                {!this.state.showList && <div>
                    <label>
                        Title:&nbsp;
                        <input value={this.state.mTitle} onChange={e => this.setState({mTitle: e.target.value})}
                               id="mTitle"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Date:&nbsp;
                        <input type="date" value={this.state.mDay}
                               onChange={e => this.setState({mDay: e.target.value})}
                               id="mDay"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Zoom Link:&nbsp;
                        <input value={this.state.mLink} onChange={e => this.setState({mLink: e.target.value})}
                               id="mLink"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Important:&nbsp;
                        <input type="checkbox" checked={this.state.mImportant}
                               onChange={e => this.setState(prevState => ({mImportant: !prevState.mImportant}))}
                               id="mImportant"/>
                    </label>
                    <br/>
                    <br/>
                    <button onClick={() => this.onSaveMeeting()}>Save Meeting</button>
                    {this.state.errorMessage && <div>
                        {this.state.errorMessage}
                    </div>}
                </div>}
            </div>
        );
    }
}

export default Zoom;
