"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepEntryListMap_1 = require("../../lib/ipfs/mfs/deepEntryListMap");
exports.default = (0, deepEntryListMap_1.loadDeepEntryListMapFromFile)()
    .tap(b => console.log(deepEntryListMap_1.deepEntryListMap.size))
    .tap(deepEntryListMap_1.enableForceSave)
    .tap(deepEntryListMap_1._saveDeepEntryListMapToServer)
    .tap(b => console.log(deepEntryListMap_1.deepEntryListMap.size))
    .tap(deepEntryListMap_1.enableForceSave)
    .tap(deepEntryListMap_1._saveDeepEntryListMapToFile)
    .tap(b => console.log(deepEntryListMap_1.deepEntryListMap.size));
//# sourceMappingURL=prepublish.js.map