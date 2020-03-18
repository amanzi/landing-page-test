// Add your theme styles here.
// See https://theme-ui.com/theme-spec.
export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#4177F6',
    secondary: '#5E5E5E',
    muted: '#F6F6F6',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
  },
  footer: {
    background: '#3B3B3B',
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
}
