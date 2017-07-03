//=require jquery
//=require formchimp
//=require svg-injector

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

  var mySVGsToInject = document.querySelectorAll('img.svg');
  SVGInjector(mySVGsToInject);
})(jQuery);
