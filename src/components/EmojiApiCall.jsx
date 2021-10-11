import React, { Component } from "react";
import EmojiSection from "./EmojiSection";
import RandomEmojiButton from "./RandomEmojiButton"
import RandomEmojiSection from "./RandomEmojiSection";
const apiKey = process.env.REACT_APP_EMOJI_API_KEY;
const fetchEmojiUrl = `https://emoji-api.com/emojis?access_key=${apiKey}`;

class EmojiApiCall extends Component {
    state = {
        emojiData: [],
    };

    componentDidMount() {
		this.fetchData();
	};

    fetchData = () => {
        fetch(fetchEmojiUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                emojiData: json
                });
            });
    };

    render() {
        return (
            <>
            <EmojiSection emojiData={this.state.emojiData}/>
            <RandomEmojiSection emojiData={this.state.emojiData}/>
            <RandomEmojiButton fetchData={this.fetchData}/>
            </>
        );
    };
};

export default EmojiApiCall;


