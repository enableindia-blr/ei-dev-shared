"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngestionProcessingStatus = exports.RAGResourceLineItemTypes = void 0;
var RAGResourceLineItemTypes;
(function (RAGResourceLineItemTypes) {
    RAGResourceLineItemTypes["WEB"] = "web";
    RAGResourceLineItemTypes["YT_VIDEO"] = "yt_video";
    RAGResourceLineItemTypes["YT_CHANNEL"] = "yt_channel";
    RAGResourceLineItemTypes["XML_DB"] = "xml_db";
    RAGResourceLineItemTypes["PDF"] = "pdf";
    RAGResourceLineItemTypes["DOC"] = "doc";
})(RAGResourceLineItemTypes || (exports.RAGResourceLineItemTypes = RAGResourceLineItemTypes = {}));
var IngestionProcessingStatus;
(function (IngestionProcessingStatus) {
    IngestionProcessingStatus["PENDING"] = "pending";
    IngestionProcessingStatus["STARTED"] = "started";
    IngestionProcessingStatus["COMPLETED"] = "completed";
    IngestionProcessingStatus["FAILED"] = "failed";
})(IngestionProcessingStatus || (exports.IngestionProcessingStatus = IngestionProcessingStatus = {}));
