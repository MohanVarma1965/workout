import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ColumnChart, PieChart} from 'react-chartkick';
import withRedirectOnNotAuth from "../hocs/withRedirectOnNotAuth";
import {getStoryBoard} from "../ducks/app/actions";

window.Chart = require('chart.js');

class StoryBoard extends React.Component {

    constructor(props) {
        super(props);
        this.renderResults = this.renderResults.bind(this);
    }

    componentDidMount() {
        this.props.actions.getStoryBoard();
    }

    renderResults() {

        let leaderBoard = [];

        for (let name in this.props.storyBoard) {

            let percentage = this.props.storyBoard[name][0]['points'];
            leaderBoard.push([name, percentage]);
        }

        return leaderBoard;
    }

    render() {
        return (
            <div className="storyBoard">
                <div>Leader Board</div>
                <ColumnChart colors={["#3e98c7", "#3e98c7"]} suffix='P' discrete={true} stacked={true} xtitle='Names'
                             ytitle='Progress' download={true}
                             data={this.renderResults()}/>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        storyBoard: state.app.storyBoard
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getStoryBoard
        }, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRedirectOnNotAuth(StoryBoard))
