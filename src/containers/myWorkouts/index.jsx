import React from 'react'
import {connect} from 'react-redux'
import withRedirectOnNotAuth from '../../hocs/withRedirectOnNotAuth'

/*const MyAccountContainer = ({ auth }) => <div>Hello, {auth}!</div>*/


class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfWorkouts : []
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return (
            <div className="mainContainer">
                {/* <div className="workoutContainer">
            <img className="imageContainer" src={require('../../images/pushUp.jpg')}/>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.pushUp}
                   id="pushUp"/>
          </div>  */}

          this is in main section
            </div>
        )

    }
}

const mapStateToProps = ({firebase: {auth}}) => ({auth})

export default connect(mapStateToProps)(withRedirectOnNotAuth(MyWorkouts))
