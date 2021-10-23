import React, { Component } from "react";

class EmojiSection extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <div className="quadrant">
                <header>
                    Green Zone
                </header>
                <section className="emoji-container"> 
                    <div className="top-quadrant"> 
                        <div className="top-left-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                        </div> 
                        <div className="top-right-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                        </div> 
                    </div>
                    <div className="bottom-quadrant"> 
                        <div className="bottom-right-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                        </div> 
                        <div className="bottom-left-emoji"> 
                            <div className="emoji">{this.props.emojiData[10].character}</div>
                        </div>
                    </div> 
                </section> 
            </div> :
            <>
			<p></p>
			</>
			}
			</>
        )
    }
}

export default EmojiSection; 

