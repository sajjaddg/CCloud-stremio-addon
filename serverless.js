const { getRouter } = require("stremio-addon-sdk");
const addonInterface = require("./addon");
const router = getRouter(addonInterface);

module.exports = function (req, res) {
  // Use Now.sh CDN cache: 1 day cache on CDN, no cache on browser
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");

  router(req, res, function () {
    res.statusCode = 404;
    res.end();
  });
};
