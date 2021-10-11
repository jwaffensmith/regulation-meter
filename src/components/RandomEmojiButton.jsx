import React, { Component } from "react";

class RandomEmoji extends Component {

    componentWillUnmount() {
        this.props.fetchData()
    };

    render() {
        return (
            <section>
                <button onClick={() => this.props.fetchData()}>Random Emoji</button> 
            </section> 
        )
    }

};

export default RandomEmoji;