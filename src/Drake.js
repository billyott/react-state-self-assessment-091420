import React from 'react';
import {yes, no} from './objects.js'

class Drake extends React.Component {

    state = {
        cardView: false
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                cardView: !prevState.cardView
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.cardView ? (<h1>{yes["yes-statement"]}</h1>) : (<h1>{no["no-statement"]}</h1>)}
                {this.state.cardView ? (<img onClick={this.handleClick} alt="yes-drake" src={yes["yes-image"]}/>) : (<img onClick={this.handleClick} alt="no-drake" src={no["no-image"]}/>)}
            </div>   
        )
    }
}


export default Drake;