import React, { Component } from "react";
import EmojiSection from "./EmojiSection";
const apiKey = process.env.REACT_APP_EMOJI_API_KEY;
const fetchEmojiUrl = `https://emoji-api.com/emojis?access_key=${apiKey}`;

class EmojiApiCall extends Component {
    state = {
        emojiData: [],
    };

    componentDidMount() {
        fetch(fetchEmojiUrl)
            .then(res => res.json())
            .then(json => {
                this.setState({
                emojiData: json
                });
                console.log(this.state.emojiData[0].character)
            });
    };

    render() {
        return (
            <EmojiSection emojiData={this.state.emojiData}/>
        );
    };
};

export default EmojiApiCall;


