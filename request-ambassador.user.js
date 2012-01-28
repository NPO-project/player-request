// ==UserScript==
// @name          Ambassadeur aanvraag
// @namespace     https://github.com/NPO-project/player-request
// @description	  Vraagt een beschikbare ambassadeur aan
// @include       http://nl*.tribalwars.nl/game.php*&mode=vacation
// ==/UserScript==

var requester = {
    interface: {
        
    },
    debugging: {
        log: function (text) {
            console.log(text);
        }
    }
}
requester.debugging.log('Hello World!');
