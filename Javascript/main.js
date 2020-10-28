// METODO RUN POST LOAD
$(document).ready(function() {
// reference
var clickprodotti = $('.whitdropdown > a');
var menuprodotti = $('.whitdropdown > .dropdown-menu')

// show/hide menu
clickprodotti.click(function(){

var actualmenu = $(this).next('.dropdown-menu');

menuprodotti.not(actualmenu).hide()

actualmenu.toggle();


});


































});// FINE METODO
