// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

// eslint-disable-next-line import/no-default-export -- default export required
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          {/* eslint-disable-next-line perfectionist/sort-jsx-props -- easier reading order */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* eslint-disable-next-line perfectionist/sort-jsx-props -- easier reading order */}
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
