/**
 * Created by Edu on 14/6/16.
 */
angular.module("whatapop")
    .filter("OnlyName", function () {
        return function (nameComplete) {

            if (nameComplete !== undefined) {

                var name = nameComplete.split("[");

            } else {

                name = [];
            }

            return name[0];
        }
    });