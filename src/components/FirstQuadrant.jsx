import React, { Component } from "react";

class FirstQuadrant extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <div className="first-quadrant">
                <header>
                    Yellow Zone
                </header>
                <section className="emoji-container"> 
                    <div className="top-quadrant"> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Worried</div>
                        </div> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Silly</div>
                        </div> 
                    </div>
                    <div className="right-quadrant"> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Excited</div>
                        </div> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[10].character}</div>
                            <div className="emoji-text">Scared</div>
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

export default FirstQuadrant; 