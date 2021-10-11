import React, { Component } from "react";

class EmojiSection extends Component {

    render () {
        return (
            <section>
                <div> {this.props.emojiData[0].character} </div>
            </section>
        )
    }
}

export default EmojiSection; 

