import React from 'react';

function ImageDisplayer() {
    return (<>
        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/pushUp.jpg')}/>
        </div>

        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/plank.jpg')}/>
        </div>


        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/sidePlank.jpg')}/>

        </div>

        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/sidePlankRise.jpg')}/>

        </div>

        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/squats.jpg')}/>
        </div>

        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/toeTouch.jpg')}/>

        </div>

        <div className="workoutContainer">
            <img className="imageContainer" src={require('../images/wallSit.jpg')}/>
        </div>
    </>)
}

export default ImageDisplayer;