import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import { Modal } from "./components/modal";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <title>Homebase</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Dominik Reinert" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          lang="en-EN"
          content="Homepage of the Wanderlust homebase coworking located in Merzig, Saarland, Germany."
        />
        <meta
          name="description"
          lang="de-DE"
          content="Homepage des Wanderlust homebase coworking in Merzig, Saarland, Deutschland."
        />

        <meta property="og:title" content="Wanderlust homebase" />
        <meta
          property="og:description"
          content="Wanderlust homebase is your coworking in Merzig."
        />
        <meta property="og:url" content="wanderlust-homebase.netlify.com" />
        <meta property="og:type" content="website" />

        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <title>Wanderlust Homebase</title>
      </head>
      <body class={`bg-gray-50`} lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
