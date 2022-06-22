# Install

Simply go to the command line and run this command.

```sh
yarn add @reusejs/react-native
```

This library needs `react-native-vector-icons` so go on and install that too to get all the cool icons. Check out [Install guide](https://github.com/oblador/react-native-vector-icons#installation).

# Usage

Uses a centralized theme to provide consistency across all the components.

### Step 1. Import ThemeProvider and theme then wrap your root component.

This step is important. We are passing `theme` as context value that each component will access.

```js
//your root component
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ThemeProvider, theme} from '@reusejs/react-native';

function ThemeApp() {
  return (
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => ThemeApp);
```

### Step 2. Use component.

```js
//inside any file
import {Button} from '@reusejs/react-native';

function HomeScreen() {
  return (
    <Button
      onPress={() => {
        console.log('Lol');
      }}>
      Press Me
    </Button>
  );
}
```

That's pretty much it. `theme` file contains configuration for all the components. Don't worry, you can easily customize it. Let me show how:

# Customize

You just need to import `theme`, reassign the value you want to change and pass it to `ThemeProvider`. Example:  
Default primary color is blue but you like orange so you can simply do:

```js
import {ThemeProvider, theme} from '@reusejs/react-native';

theme.brandColor.primary = 'orange';

function App() {
  return (
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  );
}
```

And we are done!

> You can see all the configurations available on the theme page.

# If you have a lot of customizations

This is just a personal approach, you can do as you prefer. What I usually do is create a `theme.config.js` file and add all my customizations there.

```js
//theme.config.js at root
import {theme} from '@reusejs/react-native';

theme.textColor = {
  default: '#000',
  heading: '#999',
  subtle: '#333',
  grey: '#757575',
  disabled: '#78909c',
  white: '#f8f8f8',
};

export default theme;
```

Now, I will just import `theme` from here and pass it to my `ThemeProvider`.

```js
import {ThemeProvider} from '@reusejs/react-native';
import theme from './theme.config.js';

function App() {
  return (
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  );
}
```

> Please make sure to pass all the keys while reassigning any object inside the theme.

## Components included:

- [x] [Avatar](src/Avatar/Avatar.js)
- [x] [ActionButton](src/ActionButton/ActionButton.js)
- [x] [Badge](src/Badge/Badge.js)
- [x] [Button](src/Button/Button.js)
- [x] [SlidingButton](src/Button/SlidingButton.js)
- [x] [MenuAddButton](src/Button/MenuAddButton.js)
- [x] [Card](src/Card/Card.js)
- [x] [CheckBox](src/CheckBox/CheckBox.js)
- [x] [CircularProgressBar](src/CircularProgressBar/CircularProgressBar.js)
- [x] [Header](src/Header/Header.js)
- [ ] [Image](src/)
- [x] [Input](src/Input/Input.js)
- [x] [ListItem](src/ListItem/ListItem.js)
- [x] [SlidingListItem](src/SlidingListItem/SlidingListItem.js)
- [x] [FullScreenLoader](src/FullScreenLoader/FullScreenLoader.js)
- [x] [Overlay](src/Overlay/Overlay.js)
- [x] [Box](src/Box/Box.js)
- [x] [Stack](src/Stack/Stack.js)
- [x] [Inline](src/Inline/Inline.js)
- [ ] [Pricing](src/)
- [x] [RadioButton](src/RadioButton/RadioButton.js)
- [x] [SearchBar](src/SearchBar/SearchBar.js)
- [ ] [Social Icons / Social Icon Buttons](src/)
- [x] [Deck](src/Deck/Deck.js)
- [x] [Text](src/Text/Text.js)
- [ ] [Tooltip](src/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/reusejs/react-native/issues) and contribution [guidelines](CONTRIBUTING.md).

---
