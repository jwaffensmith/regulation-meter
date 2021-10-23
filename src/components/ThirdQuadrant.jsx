import React, { Component } from "react";

class ThirdQuadrant extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <div className="third-quadrant">
                <header>
                    Blue Zone
                </header>
                <section className="emoji-container"> 
                    <div className="left-quadrant"> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Sad</div>
                        </div> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Tired</div>
                        </div> 
                    </div>
                    <div className="left-quadrant"> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Sick</div>
                        </div> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[10].character}</div>
                            <div className="emoji-text">Bored</div>
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

export default ThirdQuadrant; 