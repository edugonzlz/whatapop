/**
 * Created by Edu on 17/6/16.
 */
angular.module("whatapop")
    .service("LocService", function () {

        this.getLoc = function () {

            return new Promise (function(resolve, reject) {

                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (data) {

                            myposition = {
                                "latitude": data.coords.latitude,
                                "longitude": data.coords.longitude
                            };
                            return resolve(myposition);
                        },
                            function () {
                                // El usuario no autorizó la acción
                                return reject(alert("Si no autorizas usar tu localización, no se puede realizar una busqueda por distancia"));
                            }
                        );
                    } else {
                        return reject(alert("Tu navegador no soporta geolocalización"));
                    }
                }
            )
        }
    }
);