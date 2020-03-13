# Amanzi Landing Page Test

Built using Gatsby.js + [MDX](https://mdxjs.com) for docs.

[Running](#running) | [Dev Notes](#devnotes) | [Components](#components)

<a id="running"></a>
## Running

To test locally, run:

```
yarn install
```

to install any dependencies, and

```
gatsby develop
```

to launch the server.

A localhost server will be started with live updates as pages and components change.
The server must be restarted if `gatsby-config.js` changes.

If dependencies change, `yarn.lock` and `package.json` must have their updates pushed to the repo as well.

### Testing Deployment

To test how CI will behave, run

```
rm -rf node_modules/ && yarn install && yarn deploy
```

### Changing Repos

Before deploying to a web hosting service, the `pathPrefix` variable needs to be
updated relative to the deployed websites location.

I.e., for `https://amanzi.github.io/landing-page-test`, the `pathPrefix` will be `landing-page-test`.

For `https://amanzi.github.io/`, `pathPrefix` will be `/`.

This variable is located in `gatsby-config.js`.

<a id="devnotes"></a>
## Developer Notes

### Adding Pages

Every Markdown file under `content/pages` will be compiled into a web page.
See other pages in that directory to get an idea of how these pages should be formatted.

An example page might be:

```
---
title: Example Markdown Page
excerpt: ok
---

<Section 
  heading="Example Markdown Page"
  lead="Tristique ipsum tempor eget"
>
<Div style={{
  maxWidth: ["none", "none", "60%"]
}}>

# Markdown Stuff

### Here, I can add Markdown components.

One should add images like this to take advantage of Gatsby features:

<Image src="placeholder.jpg" style={{mt: [4,8]}}/>

Though the regular syntax of `![alt](url)` will still work.

### Another Subsection

Remember to close the Div and Section blocks when you're done.
We have these to ensure consistent formatting (i.e., centering, body div width).

</Div>
</Section>
```

<a id="components"></a>
### Components

- Custom components are found under `src/*.js`, and the gallery component is found under `src/components/gallery.js`.
  - These components can be changed at will.
  - The theme components can be overridden: e.g., the [footer](https://github.com/arshad/gatsby-themes/blob/master/themes/gatsby-theme-flex/src/layout/footer.js)

### Theming

- This page is built off the Flex theme:
  - Theme source: https://github.com/arshad/gatsby-themes/tree/master/themes/gatsby-theme-flex
  - Sample page (rendered): https://flex.arshad.io
  - Sample page (source): https://github.com/arshad/gatsby-example-flex

- Uses Theme UI for color and component management
  - Documentation: https://theme-ui.com
  - Edit the `src/gatsby-theme-flex/theme.js` file to change/update theming

### Assets

- Images under `assets/images` will be pre-processed for fast loading and dynamic sizes
  - Images under `content/gallery` will be auto-populated into the image gallery
- All other assets (videos, BibTex files, etc) should go under `static`