var submitHandler = (event) => {
    event.preventDefault();
    $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
    var form = $('#contact-form');
    var data = $(form).serializeArray();
    console.log(data);
    console.log(data[0].value);
    Email.send({
      SecureToken : "501d983f-21f5-4687-a224-0ca8cf70cc6f",
      To : "",
      From : data[1].value,
      Subject :data[2].value,
      Body : data[3].value
  }).catch(() => {
    $('#send').removeAttr('disabled').attr('value', 'Send');
    $( "#error").slideDown( "slow" );
    setTimeout(function() {
    $( "#error").slideUp( "slow" );
    }, 5000);
  }).then(() => {
        $('#send').removeAttr('disabled').attr('value', 'Send');
        $( "#success").slideDown( "slow" );
        setTimeout(function() {
        $( "#success").slideUp( "slow" );
        }, 5000);
        $('#contact-form').reset();
    });
  return false;
}