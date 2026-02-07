const { addonBuilder } = require("stremio-addon-sdk");
const manifest = require("./manifest");
const catalogHandler = require("./handlers/catalog");
const metaHandler = require("./handlers/meta");
const streamHandler = require("./handlers/stream");

const builder = new addonBuilder(manifest);

// Catalog: Returns list of items for the main screen
builder.defineCatalogHandler(catalogHandler);

// Meta: Returns item details when clicked
builder.defineMetaHandler(metaHandler);

// Stream: Returns playable URLs (shown in addon dropdown)
builder.defineStreamHandler(streamHandler);

module.exports = builder.getInterface();
