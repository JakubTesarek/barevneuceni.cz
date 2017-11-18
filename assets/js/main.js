$(document).ready(function() {
  init_form();
  init_external_links();
});


// GOOGLE TAG MANAGER
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56VWP8D');

function init_external_links() {
	$('a.external' ).attr('target', '_blank');	
}

function init_form() {
    $('body').on('click', '.flash > button', function(event){
      $(this).parent('.flash').remove()
    })

    $('#contact-form').submit(function(e) {
      var elem_button = $(this).find('input[type="submit"]');
      var send_text = elem_button.val()
      var elem_message = $(this).find('[name="message"]');
      var elem_replyto = $(this).find('[name="_replyto"]');
      var elem_subject = $(this).find('[name="_subject"]');

      elem_button.prop('disabled', true);
      elem_button.val('Odesílám ...')
      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        dataType: 'json',
        data: {
          message: elem_message.val(),
          _replyto: elem_replyto.val(),
          _subject: elem_subject.val()
        },
        success: function(data) {
          $('#flashes').append('<div class="flash success"><p>Děkuji, na vaši zprávu odpovíme co nejdříve.</p><button type="button">&times;</button></div>');
          elem_message.val('');
          elem_replyto.val('');
        },
        error: function(data) {
          $('#flashes').append('<div class="flash failure"><p>Při zpracování formuláře bohužel došlo k chybě. Zkuste nám prosím napsat přímo na  <a href="mailto:katka@barevneuceni.cz?subject=' + elem_subject.val() + '&body=' + elem_message.val() + '">katka@barevneuceni.cz</a>.</p><button type="button">&times;</button></div>');
          console.log('fail');
        }
      });
      elem_button.val(send_text)
      elem_button.prop('disabled', false);
      e.preventDefault();
  });
}

