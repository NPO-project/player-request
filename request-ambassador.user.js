// ==UserScript==
// @name          Ambassadeur aanvraag
// @namespace     https://github.com/NPO-project/player-request
// @description	  Vraagt een beschikbare ambassadeur aan
// @include       http://nl*.tribalwars.nl/game.php*&mode=vacation
// @require       http://code.jquery.com/jquery-1.5.1.js
// ==/UserScript==

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

addJQuery(main);

function main() {
    var requester = {
        gui: {
            initialize: function () {
                requester.debugging.log('Initializing the interface class...');
                this.area = $('td#content_value>table:eq(0)>tbody:eq(0)>tr:eq(0)>td:eq(1)');
            },
            area: null
        },
        debugging: {
            log: function (text) {
                console.log(text);
            }
        }
    };
    requester.debugging.log('Started the ambassador script');
    requester.gui.initialize();
    requester.debugging.log('Fully initialized the script');
};
