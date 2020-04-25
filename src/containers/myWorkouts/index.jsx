import React from 'react'
import {connect} from 'react-redux'
import withRedirectOnNotAuth from '../../hocs/withRedirectOnNotAuth';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {bindActionCreators} from 'redux';
import {submitLog, getPreviousLogs, getStoryBoard} from '../../ducks/app/actions';
import imageDisplayer from "../../components/imageDisplayer";
import StoryBoard from '../StoryBoard'

class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "activeElement": ""
        }
        this.submitworkOut = this.submitworkOut.bind(this);
    }

    componentDidMount() {
        this.props.actions.getPreviousLogs();
        this.props.actions.getStoryBoard();
    }

    submitButtonStatus() {
        return this.state.activeElement ? false : true
    }

    highLightSelected(event) {
        event.preventDefault();
        this.setState({activeElement: event.target.value});
    }

    calculateFinalLogs() {
        let points = 0;
        if (this.state.activeElement == "Light") {
            points = 2;
        } else if (this.state.activeElement == "Medium") {
            points = 4;
        } else if (this.state.activeElement == "High") {
            points = 6;
        } else if (this.state.activeElement == "Intense") {
            points = 8;
        }
        return this.props.previousLogs + points
    }

    submitworkOut(event) {
        event.preventDefault();
        let logArray = this.state.activeElement;
        this.calculateFinalLogs();
        this.props.actions.submitLog(this.calculateFinalLogs());
        this.props.actions.getPreviousLogs();
        this.setState({activeElement: ""})

    }

    render() {
        console.log(this.props);
        return (
            <form className="mainContainer" onSubmit={(event) => {
                this.submitworkOut(event)
            }}>
                <StoryBoard/>
                <div className="workoutContainer progress">
                    <div> {this.props.displayName} Log your workout to reach the goal of 400 Points</div>
                    <br></br>
                    <CircularProgressbar value={this.props.previousLogs / 400 * 100} maxValue={100}
                                         text={`${this.props.previousLogs / 400 * 100}%`}/></div>
                {imageDisplayer}
                <div>
                    <input type="button" value="Light" className={this.state.activeElement == "Light" ? "active logWorkButton" : "logWorkButton"} onClick={(event) => {
                        this.highLightSelected(event)
                    }}/>
                    <input type="button" value="Medium" className={this.state.activeElement == "Medium" ? "active logWorkButton" : "logWorkButton"} onClick={(event) => {
                        this.highLightSelected(event)
                    }}/>
                    <input type="button" value="High" className={this.state.activeElement == "High" ? "active logWorkButton" : "logWorkButton"} onClick={(event) => {
                        this.highLightSelected(event)
                    }}/>
                    <input type="button" value="Intense" className={this.state.activeElement == "Intense" ? "active logWorkButton" : "logWorkButton"} onClick={(event) => {
                        this.highLightSelected(event)
                    }}/>
                </div>

                <div className="workoutContainer buttonContainer">
                    <input type="submit" className="logWorkButton" value="LOG YOUR EFFORTS"
                           disabled={this.submitButtonStatus()}/>
                </div>

            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            submitLog,
            getPreviousLogs,
            getStoryBoard
        }, dispatch)
    };
}

const mapStateToProps = (state) => {
    return {
        didDoSomething: state.app.didDoSomething,
        previousLogs: state.app.previousLogs,
        displayName: state.app.displayName,
        storyBoard: state.app.storyBoard
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRedirectOnNotAuth(MyWorkouts))