(function() {
'use strict';

function SkillsControler(){
        var vm = this;

        $( document ).ready(function() {
		$('#myStat').circliful();
    });
}

    angular.module('cvApp')
        .controller('SkillsControler', SkillsControler);
})();