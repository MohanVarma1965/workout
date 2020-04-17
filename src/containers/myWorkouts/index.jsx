import React from 'react'
import {connect} from 'react-redux'
import withRedirectOnNotAuth from '../../hocs/withRedirectOnNotAuth'

/*const MyAccountContainer = ({ auth }) => <div>Hello, {auth}!</div>*/


class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "plank": 0,
            "pushUp": 0,
            "sidePlank" : 0,
            "sidePlankRise": 0,
            "squats": 0,
            "toeTouch": 0,
            "wallSit": 0
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/pushUp.jpg')}/>
                    <input type="text"  className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.pushUp}
                           id="pushUp"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/plank.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.plank}
                           id="plank"/>
                </div>


                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/sidePlank.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.sidePlank}
                           id="sidePlank"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/sidePlankRise.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.sidePlankRise}
                           id="sidePlankRise"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/squats.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.squats}
                           id="squats"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/toeTouch.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.toeTouch}
                           id="toeTouch"/>
                </div>

                <div className="workoutContainer">
                    <img className="imageContainer" src={require('../../images/wallSit.jpg')}/>
                    <input type="text" className="workoutInputValue" onChange={(event) => this.handleChange(event)} value={this.state.wallSit}
                           id="wallSit"/>
                </div>

            </div>
        )
    }


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


}

const mapStateToProps = ({firebase: {auth}}) => ({auth})

export default connect(mapStateToProps)(withRedirectOnNotAuth(MyWorkouts))
