/**
 * Created by Edu on 14/6/16.
 */
angular.module("whatapop")
    .filter("OnlyName", function () {
        return function (nameComplete) {

            var name = nameComplete.split("[");

            return name[0];
        }
    });