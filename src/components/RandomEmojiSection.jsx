import React, { Component } from "react";

class RandomEmojiSection extends Component {
		
	render() {
        const randomEmoji = Math.floor(Math.random()*this.props.emojiData.length)
		const emoji = this.props.emojiData[randomEmoji] 
		return (
			<>
			{emoji ? 
			<section>
				<div className="emoji">
					{emoji.character}
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

export default RandomEmojiSection;