/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop")
    .service("LocService", function (UserService, $q) {

        this.myLocation = function () {

            var defer = $q.defer();

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (data) {

                        myposition = {
                            "latitude": data.coords.latitude,
                            "longitude": data.coords.longitude
                        };

                        defer.resolve(myposition);
                    },
                    function () {

                        // El usuario no autorizó la acción
                        defer.reject(alert("Si no autorizas usar tu localización, " +
                            "no se puede realizar una busqueda por distancia"));
                    }
                );
            } else {
                defer.reject(alert("Tu navegador no soporta geolocalización"));
            }

            return defer.promise;
        };


        this.productLocation = function(product){

            UserService.getUserById(product.seller.id)
                .then(function (response) {

                    var user = response.data;

                    return ({"latitude": user.latitude,
                        "longitude": user.longitude });
                })
        };

        this.userLocation = function (user) {

            return {"latitude": user.latitude,
                "longitude": user.longitude };
        };
    }
);