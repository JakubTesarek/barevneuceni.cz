$(document).ready(function() {
    $('body').on('click', '.flash > button', function(event){
      $(this).parent('.flash').remove()
    })

    $('#contact-form').submit(function(e) {
      var elem_button = $(this).find('input[type="submit"]');
      var elem_message = $(this).find('[name="message"]');
      var elem_replyto = $(this).find('[name="_replyto"]');
      var elem_subject = $(this).find('[name="_subject"]');

      elem_button.attr('disabled','disabled');
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
          $('#flashes').append('<div class="flash failure"><p>There was an error and your message was not send. Try email me directly at <a href="mailto:mail@jakubtesarek.cz?subject=' + elem_subject.val() + '&body=' + elem_message.val() + '">mail@jakubtesarek.cz</a>.</p><button type="button">&times;</button></div>');
          console.log('fail');
        }
      });
      elem_button.removeAttr('disabled');
      e.preventDefault();
  });
});


