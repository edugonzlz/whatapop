/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop")
    .service("DistanceService", function (UserService, LocService, $haversine) {

        this.distanceFromProduct = function (product) {
            
            return new Promise (function (resolve, reject) {
                //Obtenemos nuestra posicion
                LocService.getLoc()
                    .then(function (mylocation) {

                        UserService.getUserById(product.seller.id)
                            .then(function (response) {

                                var user = response.data;

                                var userLoc = {"latitude": user.latitude,
                                    "longitude": user.longitude };

                                return resolve ($haversine.distance(mylocation, userLoc));
                            });

                    });
            });
            

        };

        this.productLocation = function(product){

                UserService.getUserById(product.seller.id)
                    .then(function (response) {

                        var user = response.data;

                        return resolve ({"latitude": user.latitude,
                            "longitude": user.longitude });
                    })
        };
        
        this.userLocation = function (user) {
            
            return {"latitude": user.latitude,
                "longitude": user.longitude };
        };
        
        this.distanceTwoPoints = function (position1, position2) {
            
            return $haversine.distance(position1, position2);
        };
    });