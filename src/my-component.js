// src/my-component.js
/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { default as Gallery } from "./components/gallery/Gallery";

export default ({ foo1, foo2 }) => (
    <Container>
        <Gallery/>
    </Container>
)