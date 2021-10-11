import React, { Component } from "react";

class RandomEmojiSection extends Component {
		
	render() {
		const randomEmoji = this.props.emojiData[Math.floor(Math.random()*this.props.emojiData.length)] 
		return (
			<>
			{randomEmoji ? 
			<section>
				<div className="emoji">
					{randomEmoji.character}
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