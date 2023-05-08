# Homepage for the Wanderlust Homebase coworking in Merzig

This is the open source repository for the Wanderlust Homebase coworking space in Merzig.

This app was build with [Qwik](https://qwik.builder.io/) and is automatically deployed to [Netlify](https://wanderlust-homebase.netlify.app/).

The coworking space does not exist in real life(, yet?) and this repository is mainly meant as part of my professional portfolio as software developer.

## Technologies

- [Qwik](https://qwik.builder.io/) as framework
- [Tailwind](https://tailwindcss.com/) for CSS
- [NodeJS](https://nodejs.org/) as language
- [Typescript](typescriptlang.org/) for typing
- [Unsplash](https://unsplash.com/) for images (all images were available in the "free" tier)
- [Cloudflare](https://dash.cloudflare.com/) for image hosting
- [Iconoir](https://iconoir.com/) for icons
- [Yarn](https://yarnpkg.com/) for building

As Qwik is a SSR framework, the web page is mostly rendered server side - which makes it as fast as it is.

## Starting the project

You need to have yarn installed. After that, run

- <code>yarn dev</code> to start the server locally
- <code>yarn start</code> to start the server locally and open the website in a new tab
- <code>yarn build</code> to build the server for production mode
