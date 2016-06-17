/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop")
    .service("DistanceService", function (UserService, LocService, $haversine) {

        this.getUsers = function (products) {

            //Obtenemos nuestra posicion
            LocService.getLoc()
                .then(function (response) {

                    var myposition = response;

                    var usersInDistance = [];

                    for (var product in products){
                        
                        var id = product.seller.id;
                        //Obtenemos el usuario desde el producto y su posicion
                        UserService.getUserById(id)
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
