/**
 * Created by Edu on 10/6/16.
 */
angular.module("whatapop")
    .component("products", {

        bindings: {
            $router: "<"
        },

        templateUrl: "views/products.html",

        controller: ["ProductService", "CategoryService", "LocService", "DistanceService",
            function (ProductService, CategoryService, LocService, DistanceService) {

                var self = this;

                Array.prototype.contains = function(element) {
                    for (var i = 0; i < this.length; i++) {
                        if (this[i] == element) {
                            return true;
                        }
                    }
                    return false;
                };

                //Nos suscribimos a un hook de inicio
                self.$onInit = function () {

                    ProductService.getProducts()
                        .then(function (response) {
                            self.products = response.data;
                        });

                    CategoryService.getCategories()
                        .then(function (response) {
                            self.categories = response.data;
                        });

                    usersInDistance = DistanceService.getUsers(self.products);
                    console.log(usersInDistance);
                };

                self.getImageUrl = ProductService.getImageUrl;


                self.users = function (product, index, products) {
                    //Me pasan cada valor del array, su indice y el array completo
                    //Tengo que ver si cada product.seller.id esta en el array de usuariosEnDistancia

                    var id = product.seller.id;
                    return usersInDistance.contains(id);
                }

            }]
    });


// function(value, index, array);
// A predicate function can be used to write arbitrary filters.
//     The function is called for each element of the array,
// with the element, its index, and the entire array itself as arguments.
//     The final result is an array of those elements that the predicate returned true for.