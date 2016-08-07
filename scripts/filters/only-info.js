/**
 * Created by Edu on 14/6/16.
 */
angular.module("whatapop")
    .filter("OnlyInfo", function () {
        return function (nameComplete) {

            if (nameComplete !== "undefined") {

                var split = nameComplete.split("[");
                var extra = split[1];
            } else {

                extra = "";
            }

            return extra.slice(0, (extra.length - 1));
        }
    });