//=require jquery
//=require formchimp

(function($) {
  $(".newsletter").formchimp({
    'errorMessage': 'Aj… Något gick fel i kontakten med databasen. Försök prenumerera igen.',
    'responseClass': 'newsletter__response',
    'successMessage': 'Kul att du är intresserad! Du får strax ett mail för att bekräfta din prenumeration.',
    'onMailChimpSuccess': function() {

    },
    'onMailChimpError': function() {

    }
  });
})(jQuery);
