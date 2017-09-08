System.register(["./datasource", "./query_ctrl"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var datasource_1, query_ctrl_1, PrometheusConfigCtrl, PrometheusAnnotationsQueryCtrl;
    return {
        setters: [
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            }
        ],
        execute: function () {
            exports_1("Datasource", datasource_1.PrometheusDatasource);
            exports_1("QueryCtrl", query_ctrl_1.PrometheusQueryCtrl);
            PrometheusConfigCtrl = (function () {
                function PrometheusConfigCtrl() {
                }
                return PrometheusConfigCtrl;
            }());
            PrometheusConfigCtrl.templateUrl = 'partials/config.html';
            exports_1("ConfigCtrl", PrometheusConfigCtrl);
            PrometheusAnnotationsQueryCtrl = (function () {
                function PrometheusAnnotationsQueryCtrl() {
                }
                return PrometheusAnnotationsQueryCtrl;
            }());
            PrometheusAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
            exports_1("AnnotationsQueryCtrl", PrometheusAnnotationsQueryCtrl);
        }
    };
});
//# sourceMappingURL=module.js.map