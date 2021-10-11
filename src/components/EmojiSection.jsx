import React, { Component } from "react";

class EmojiSection extends Component {
    render () {
        return (
            <section>
                {this.props.emojiData}
            </section>
        )
    }
}

export default EmojiSection; 