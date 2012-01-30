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
                this.area = $('td#content_value>table:eq(0)>tbody:eq(0)>tr:eq(0)>td:eq(1)');
                requester.debugging.log('Initialized the interface class');
                requester.debugging.initializeDebugGui();
                requester.gui.requestButton.initialize();
            },
            area: null,
            requestButton: {
                initialize: function () {
                    requester.gui.area.append('<table class="vis"><tbody><tr><th>NPO-Request</th><td><form><input type="button" id="requester_button" value="Vraag aan" /></form></td></tr></tbody></table>');
                    $('#requester_button').click(requester.gui.requestButton.onClick);
                },
                onClick: function () {
                    requester.debugging.log('The request button got pressed.');
                }
            }
        },
        debugging: {
            initialize: function () {
                requester.debugging.log('Initialized the debugging class');
            },
            initializeDebugGui: function () {
                requester.gui.area.append('<table class="vis"><tbody><tr><th>NPO-Debug</th><td id="requester_debug"></td></tr></tbody></table>');
            },
            log: function (text) {
                console.log(text);
                $('#requester_debug').text(text);
            }
        }
    };
    requester.debugging.initialize();
    requester.gui.initialize();
    requester.debugging.log('Fully initialized the script');
};
