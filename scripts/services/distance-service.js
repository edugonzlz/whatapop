/**
 * Created by Edu on 17/6/16.
 */
var DistanceService = function (UserService, LocService, $haversine, $q) {

    this.nearlySellersIds = function () {

        var defer = $q.defer();

        LocService.myLocation()
            .then(function (mylocation) {

                //Quiero un array de IDs de  sellers cercanos
                UserService.getUsers().then(function (response) {

                    var sellers = response.data;

                    var nearlySellers = sellers.reduce(function (okSellers, seller) {

                        var sellerLocation = {"latitude": seller.latitude,
                            "longitude": seller.longitude };

                        if ($haversine.distance(sellerLocation, mylocation)< 5000){
                            okSellers.push(seller.id);
                        }

                        return okSellers;

                    }, []);

                    defer.resolve (nearlySellers);
                });
            });

        return defer.promise;
    };

};

DistanceService.$inject = [ "UserService", "LocService", "$haversine", "$q"];

angular.module("whatapop").service("DistanceService", DistanceService);