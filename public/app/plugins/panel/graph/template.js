System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var template;
    return {
        setters: [],
        execute: function () {
            template = "\n<div class=\"graph-wrapper\" ng-class=\"{'graph-legend-rightside': ctrl.panel.legend.rightSide}\">\n  <div class=\"graph-canvas-wrapper\">\n\n    <div class=\"datapoints-warning\" ng-show=\"ctrl.datapointsCount===0\">\n      <span class=\"small\" >\n        No datapoints <tip>No datapoints returned from metric query</tip>\n      </span>\n    </div>\n\n    <div class=\"datapoints-warning\" ng-show=\"ctrl.datapointsOutside\">\n      <span class=\"small\">\n        Datapoints outside time range\n        <tip>Can be caused by timezone mismatch between browser and graphite server</tip>\n      </span>\n    </div>\n\n    <div grafana-graph class=\"histogram-chart\" ng-dblclick=\"ctrl.zoomOut()\">\n    </div>\n\n  </div>\n\n  <div class=\"graph-legend-wrapper\" graph-legend></div>\n  </div>\n\n<div class=\"clearfix\"></div>\n";
            exports_1("default", template);
        }
    };
});
//# sourceMappingURL=template.js.map