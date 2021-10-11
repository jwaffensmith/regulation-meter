import React, { Component } from "react";

class EmojiSection extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <section>
                <div> 
                    <div className="emoji">{this.props.emojiData[0].character}</div>
                    {this.props.emojiData[0].unicodeName} 
                </div>
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

