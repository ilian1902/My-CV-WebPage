(function() {
'use strict';

function HomeController(){
        var vm = this;
    vm.name = 'Ilian Bratanov';
    vm.title = "Web Front-End Developer";
    console.log("asd");
    var proba = document.getElementById("proba");
    console.log('asdfghsdf');
    vm.proba = proba;
    console.log(vm.proba);
}

    angular.module('cvApp')
        .controller('HomeController', HomeController);
})();