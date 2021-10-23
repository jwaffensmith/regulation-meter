import React, { Component } from "react";

class SecondQuadrant extends Component {

    render () {
        return (
            <>
			{this.props.emojiData.length > 0 ? 
            <div className="second-quadrant">
                <header>
                    Red Zone
                </header>
                <section className="emoji-container"> 
                    <div className="left-quadrant"> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Mad</div>
                        </div> 
                        <div className="top-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Yelling</div>
                        </div> 
                    </div>
                    <div className="left-quadrant"> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[0].character}</div>
                            <div className="emoji-text">Terrified</div>
                        </div> 
                        <div className="bottom-emoji"> 
                            <div className="emoji">{this.props.emojiData[10].character}</div>
                            <div className="emoji-text">Out of Control</div>
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

export default SecondQuadrant; 