import React from 'react'
import {connect} from 'react-redux'
import withRedirectOnNotAuth from '../../hocs/withRedirectOnNotAuth';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import {bindActionCreators} from 'redux';
import {submitLog, getPreviousLogs} from '../../ducks/app/actions';

/*const MyAccountContainer = ({ auth }) => <div>Hello, {auth}!</div>*/


class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "plank": 0,
            "pushUp": 0,
            "sidePlank": 0,
            "sidePlankRise": 0,
            "squats": 0,
            "toeTouch": 0,
            "wallSit": 0,
            "progress": 0
        }
        this.submitworkOut = this.submitworkOut.bind(this);
        //this.calculateProgress = this.calculateProgress.bind(this);
    }

    componentDidMount() {
        this.props.actions.getPreviousLogs();
    }


    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    submitworkOut(event) {
        event.preventDefault();
        let logArray = [this.state.pushUp, this.state.plank, this.state.sidePlank, this.state.sidePlankRise,
            this.state.squats, this.state.toeTouch, this.state.wallSit];

        if (Array.isArray(this.props.previousLogs)) {
            this.props.actions.submitLog(logArray, this.props.previousLogs);
        } else {
            this.props.actions.submitLog(logArray);
        }
    }


    render() {

        let progressL = 0;
        const calculateProgress = () => {

            if (this.props.previousLogs && Array.isArray(this.props.previousLogs) && this.props.previousLogs[0]) {
                this.props.previousLogs.map((num) => {
                    progressL = parseInt(progressL) + parseInt(num);
                })
                // this.setState({progress: progressL })
            }
            return progressL

        }

        console.log("inside the render of my workouts");
        console.log(this.props);

        return (
            <form className="mainContainer" onSubmit={(event) => {
                this.submitworkOut(event)
            }}>
                 {calculateProgress()}
                <CircularProgressbar value={progressL} maxValue={1000}
                                     text={`${progressL}/1000`}/>;
                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/pushUp.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.pushUp}
                           id="pushUp"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/plank.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.plank}
                           id="plank"/>
                </div>


                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/sidePlank.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.sidePlank}
                           id="sidePlank"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/sidePlankRise.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.sidePlankRise}
                           id="sidePlankRise"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/squats.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.squats}
                           id="squats"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/toeTouch.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.toeTouch}
                           id="toeTouch"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/wallSit.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)}
                           value={this.state.wallSit}
                           id="wallSit"/>
                </div>

                <div className="workoutContainer buttonContainer">
                    <input type="submit" class="logWorkButton" value="Log Work"/>
                </div>

            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            submitLog,
            getPreviousLogs
        }, dispatch)
    };
}

//const mapStateToProps = ({firebase: {auth}}) => ({auth})


const mapStateToProps = (state) => {
    console.log("inside the state");
    console.log(state)
    return {
        didDoSomething: state.app.didDoSomething,
        previousLogs: state.app.previousLogs
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRedirectOnNotAuth(MyWorkouts))


/* handleChange(event, i) {
 console.log("inside the handler");
 this.setState({[i]: event.target.value})
}*/
/*render() {
    const listItems = this.props.listOfWorkouts.map((i) =>
        <div className="workoutContainer">
            <img className="imageContainer" src={require(`../../images/${i}.jpg`)}/>
            <input className="workoutInputValue" type="text" id= {i} onChange={(event, i) => this.handleChange(event)} />
        </div>
    );
    return <div className="mainContainer">
              {listItems}
    </div>
}*/
