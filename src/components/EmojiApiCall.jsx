import React, { Component } from "react";

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
                console.log(json);
                // this.setState({
                // emojiData: json.data,
                // });
            });
    };

    render() {
        return (
            // <>
            // <EmojiSection emojiData = {emojiData} />
            // </>
            <h1> hello! </h1>
        );
    };
};

export default EmojiApiCall;


