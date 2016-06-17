/**
 * Created by Edu on 13/6/16.
 */
angular.module("whatapop")
    .value("Settings", {
        urlServidor: "http://localhost:8000",
        endpointProducts: "/api/products",
        endpointCategories: "/api/categories",
        endpointUsers: "/api/users",
        endpointUpload: "api/upload"
    });