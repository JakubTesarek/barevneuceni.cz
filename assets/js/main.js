$(document).ready(function() {
  init_flash_messages();
});


// GOOGLE TAG MANAGER
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56VWP8D');

// EXTERNAL LINKS
$('a.external' ).attr('target', '_blank');

// FLASH MESSAGES
function init_flash_messages() {
  $('body').on('click', '.flash > button', function(event){
    $(this).parent('.flash').remove()
  })
}
function flash_failure(message) {
  $('#flashes').append('<div class="flash failure"><p>' + message + '</p><button type="button">&times;</button></div>');
}

function flash_success(message) {
  $('#flashes').append('<div class="flash success"><p>' + message + '</p><button type="button">&times;</button></div>');
}