
/*global document, md5 */

(function () {
    'use strict';
    var clip = new Clipboard('.btn');
    var input = document.getElementById('input');
    var salt = document.getElementById('salt');
    var times = document.getElementById('times');

    document.getElementById('calculate').addEventListener(
        'click',
        function (event) {
            event.preventDefault();
            var current = input.value;
            for(var i=0; i<times.value; i++){
             current = md5(current + md5(salt.value));
            }

            document.getElementById('result').value = current;
        }
    );

}());
