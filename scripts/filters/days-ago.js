/**
 * Created by Edu on 19/6/16.
 */
angular.module("whatapop")
    .filter("DaysAgo", function () {
        return function (date) {

            var today = Date.now();
            var dif = today - date;

            var days = Math.floor(dif / (1000 * 60 * 60 * 24));

            if (days <= 365){
                var daysago = days + " días";
            } else {
                daysago = "mas de un año"
            }

            return daysago;
        }
    });