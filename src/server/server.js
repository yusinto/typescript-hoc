"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var universal_hot_reload_1 = require("universal-hot-reload");
var webpack_config_client_1 = __importDefault(require("../../webpack.config.client"));
var PORT = 3000;
var app = express_1.default();
var devServerBundleUrl = universal_hot_reload_1.getDevServerBundleUrl(webpack_config_client_1.default); // tslint:disable-line
app.use('/dist', express_1.default.static('dist', { maxAge: '1d' }));
app.use(function (req, res) {
    var html = "<!DOCTYPE html>\n                    <html>\n                      <head>\n                        <meta charset=\"utf-8\">\n                        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                        <title>Universal Hot Reload</title>\n                      </head>\n                      <body>\n                        <div id=\"reactDiv\" />\n                        <script type=\"application/javascript\" src=\"" + devServerBundleUrl + "\"></script>\n                      </body>\n                    </html>";
    res.end(html);
});
// export httpServer object so universal-hot-reload can access it
exports.default = app.listen(PORT, function () {
    console.log("Example app listening at " + PORT + "...");
});
//# sourceMappingURL=server.js.map