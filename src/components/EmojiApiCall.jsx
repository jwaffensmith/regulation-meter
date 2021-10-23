import React, { Component } from "react";
import FourthQuadrant from "./FourthQuadrant";
import FirstQuadrant from "./FirstQuadrant";
import ThirdQuadrant from "./ThirdQuadrant";
import SecondQuadrant from "./SecondQuadrant";
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
             <section className="top-quadrants">
                <SecondQuadrant emojiData={this.state.emojiData}/>
                <ThirdQuadrant emojiData={this.state.emojiData}/>
            </section>
            <section className="bottom-quadrants">
                <FirstQuadrant emojiData={this.state.emojiData}/>
                <FourthQuadrant emojiData={this.state.emojiData}/>
            </section>
            <RandomEmojiSection emojiData={this.state.emojiData}/>
            <RandomEmojiButton fetchData={this.fetchData}/>
            </>
        );
    };
};

export default EmojiApiCall;


