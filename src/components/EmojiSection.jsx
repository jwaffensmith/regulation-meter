import React, { Component } from "react";

class EmojiSection extends Component {

    render () {
        return (
            <>
			{this.props.emojiData[0] ? 
            <section>
                <div style={{width:'200', height:'100'}}> {this.props.emojiData[0].character} </div>
            </section> :
            <>
			<p></p>
			</>
			}
			</>
        )
    }
}

export default EmojiSection; 

