//define functions here

function getIt() {
  $('p').on('click', function() {
  alert('Hey!');
  return;
  })
}

function frameIt() {
  $('.tasty').on('load', function() {
  return
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which == 71) {
      alert("G was pressed");
      return;
    }
  })
}

function submitIt() {
  $("form").on('submit', function() {
    alert("Your form is going to be submitted now.");
    return;
  })
}

$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
