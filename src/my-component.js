// src/my-component.js
/** @jsx jsx */
import { jsx, Container, Button } from "theme-ui";
import { Gallery } from "gatsby-theme-gallery";

export default ({ foo1, foo2 }) => (
    <Container>
        <Gallery/>
    </Container>
)