/**
 * Created by Edu on 14/6/16.
 */
angular.module("whatapop")
    .filter("OnlyInfo", function () {
        return function (nameComplete) {

            var split = nameComplete.split("[");
            var onlyName = split[0];
            var extra = split[1];

            return extra.slice(0, (extra.length - 1));
        }
    });