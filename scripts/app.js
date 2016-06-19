/**
 * Created by Edu on 9/6/16.
 */

angular.module("whatapop", [
    "ngComponentRouter",
    "dahr.ng-image-picker",
    "dahr.ng-haversine"
]);

angular.module("whatapop")
    .config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });

//Value se suele usar para guardar settings
//Indicamos el componente raiz al router
angular.module("whatapop")
    .value("$routerRootComponent", "root");