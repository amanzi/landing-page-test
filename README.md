# Amanzi Landing Page Test

Built using Gatsby.js + [MDX](https://mdxjs.com) for docs.

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

## Developer Notes

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
  - Images under `assets/gallery` will be auto-populated into the image gallery
- All other assets (videos, BibTex files, etc) should go under `static`