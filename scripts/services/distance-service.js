/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop", ["dahr.ng-haversine"])
    .service("DistanceService", function (UserService, LocService) {

        this.getUsers = function (products) {

            //Obtenemos nuestra posicion
            LocService.getLoc()
                .then(function (response) {

                    var myposition = response;

                    var usersInDistance = [];

                    for (var product in products){

                        //Obtenemos el usuario desde el producto y su posicion
                        UserService.getUserById(product.seller.id)
                            .then(function (user) {

                                var userLoc = {"latitude": user.latitude,
                                    "longitude": user.longitude };

                                //Caculamos la distancia entre las posiciones
                                var distance = $haversine.distance(myposition, userLoc);

                                //Probamos con una distancia larga, mas tarde recogemos de la vista
                                if (distance < 200000){
                                    usersInDistance.push(product.seller);
                                }
                            })
                    }

                    return usersInDistance;

                });
        }
    });
