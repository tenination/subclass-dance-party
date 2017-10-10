$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // var $rand = $('<div></div>');
    // $rand.text(dancerMakerFunctionName);
    // $('body').append($rand);

    
    //make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });
  
  $('.lineUpButton').on('click', function(event) {
    for (var n = 0; n < window.dancers.length; n++) {
      window.dancers[n].lineUp();
    }
    
 

  });
  
});
