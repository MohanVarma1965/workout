import React from 'react'
import {connect} from 'react-redux'
import withRedirectOnNotAuth from '../../hocs/withRedirectOnNotAuth'

/*const MyAccountContainer = ({ auth }) => <div>Hello, {auth}!</div>*/


class MyWorkouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfWorkouts: []
        }
    }

    handleChange(event, i) {
        console.log("inside the handler");
        this.setState({[i]: event.target.value})
    }

    render() {

        const listItems = this.props.listOfWorkouts.map((i) =>
            <div className="workoutContainer">
                <img className="imageContainer" src={require(`../../images/${i}.jpg`)}/>
                <input class="workoutInputValue" type="text" id= {i} onChange={(event, i) => this.handleChange(event)}/>
            </div>
        );

        return <div className="mainContainer">
                  {listItems}
        </div>

    }
}

const mapStateToProps = ({firebase: {auth}}) => ({auth})

export default connect(mapStateToProps)(withRedirectOnNotAuth(MyWorkouts))
