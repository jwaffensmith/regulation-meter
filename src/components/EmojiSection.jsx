import React, { Component } from "react";

class EmojiSection extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <section className="emoji-container"> 
            
                <header>
                    Green Zone
                </header>
                <div className="top-emoji"> 
                    <div className="emoji">{this.props.emojiData[0].character}</div>
                    <h3>Happy</h3>
                    <div className="emoji">{this.props.emojiData[7].character}</div>
                    
                </div> 
                <div className="bottom-emoji"> 
                    <div className="emoji">{this.props.emojiData[10].character}</div>
                    <div className="emoji">{this.props.emojiData[8].character}</div>
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

