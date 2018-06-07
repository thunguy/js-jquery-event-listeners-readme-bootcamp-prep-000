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
  $("form").on('keydown', function() {
    if ($('input:first').val() === "G") {
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

});
