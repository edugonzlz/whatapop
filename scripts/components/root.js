/**
 * Created by Edu on 9/6/16.
 */
angular.module("whatapop")
    .component("root", {

        $routeConfig:[{
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        },{
            name: "ProductDetail",
            path: "/product/:id",
            component: "productDetail"
        }],
        templateUrl: "views/root.html"
    });