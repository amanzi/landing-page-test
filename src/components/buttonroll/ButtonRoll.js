import React from "react";
import { jsx, Flex, Container, Link } from "theme-ui"
import "./styles.scss"

const ButtonRoll = ({text, url, style}) => {
    return (
        <div id="container">
            <a href={url}>
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">{text}</span>
                </button>
            </a>
        </div>
    );
}

export default ButtonRoll