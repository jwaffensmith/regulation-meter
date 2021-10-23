import React, { Component } from "react";

class FourthQuadrant extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <div className="fourth-quadrant">
                <header>
                    Green Zone
                </header>
                <section className="emoji-container"> 
                    <div className="top-quadrant"> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Calm</div>
                        </div> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Happy</div>
                        </div> 
                    </div>
                    <div className="right-quadrant"> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Okay</div>
                        </div> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[10].character}</div>
                            <div className="emoji-text">Ready to Learn</div>
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

export default FourthQuadrant; 

