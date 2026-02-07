const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./addon");

// Start the server for local development
const PORT = process.env.PORT || 7001;

serveHTTP(addonInterface, { port: PORT });

console.log(`
  CCloud Addon running at: http://localhost:${PORT}

  Install in Stremio:
    Settings → Addons → Enter: http://localhost:${PORT}/manifest.json
`);
