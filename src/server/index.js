"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var universal_hot_reload_1 = __importDefault(require("universal-hot-reload"));
var webpack_config_server_1 = __importDefault(require("../../webpack.config.server"));
var webpack_config_client_1 = __importDefault(require("../../webpack.config.client"));
universal_hot_reload_1.default(webpack_config_server_1.default, webpack_config_client_1.default); // tslint:disable-line
//# sourceMappingURL=index.js.map