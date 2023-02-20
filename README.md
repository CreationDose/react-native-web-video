# React Native Web Video

> Video component for react native project that is useful to render `<Video>` from [react-native-video](https://github.com/react-native-video/react-native-video) on web browser.

## Getting started

    $ npm i @creationdose/react-native-web-video

Alias the package in your webpack config:

    resolve: {
	    alias: {
	       'react-native': 'react-native-web',
		    ...
	       'react-native-video': '@creationdose/react-native-web-video',
	    }
	}

### Use Case
This library has actually been integrated and tested in a project that use [Storybook for React Native](https://github.com/storybookjs/react-native).
If your use case it's the same, for integrate it in you storybook project you have to add the [storybook/addon-react-native-web](https://storybook.js.org/addons/@storybook/addon-react-native-web#adding-babel-plugins) .
After that you need to alias and traspile the package in the main.js config file from the .storybook folder. Add in addons key this:

 

    addons: [
        ...
        { 
            name:  '@storybook/addon-react-native-web',
            options: {
                modulesToTranspile: ['@creationdose/react-native-web-video'],
                modulesToAlias: {
                    'react-native-video':  '@creationdose/react-native-web-video',
                },
            },
        },
	]

## Roadmap
 - [x] Initialization react-native-video component on react-native-web with main props
 - [ ] Enhanced docs template from [react-native-web-community](https://github.com/react-native-web-community/example-new-library)
 - [ ] Map other props of [react-native-video](https://github.com/react-native-video/react-native-video)


## Contributing
PRs are welcome!

Actually the only `<video>` element's attributes mapped to work allineate with RN-Video component are:

 - src
 - style
 - loop
 - onError
 - onLoadedData
 - onLoadStart
 - autoPlay
 - muted
