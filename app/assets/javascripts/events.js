// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('turbolinks:load', function() {

  $('#datetimepicker4').datetimepicker({
    format: 'MMMM D, YYYY',
    minDate: Date(),
    maxDate: new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)),
    icons: {
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      close: 'fas fa-times'
    },
    buttons: {showClose: true }
  });

  $('#datetimepicker3').datetimepicker({
    format: 'LT',
    stepping: 15,
    icons: {
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      close: 'fas fa-times'
    },
    buttons: {showClose: true}  
  });

  $('#datetimepicker1').datetimepicker({
    format: 'MMMM D, YYYY h:mm A',
    stepping: 15,
    minDate: Date(),
    maxDate: new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)),
    sideBySide: true,
    icons: {
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      close: 'fas fa-times'
    },
    buttons: {showClose: true }
  });

  $('#datetimepicker2').datetimepicker({
    format: 'MMMM D, YYYY h:mm A',
    stepping: 15,
    useCurrent: false,
    sideBySide: true,
    icons: {
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      clear: 'fas fa-trash',
      close: 'fas fa-times'
    },
    buttons: {
      showClear: true,      
      showClose: true,
    }
  });
  $("#datetimepicker1").on("change.datetimepicker", function (e) {
    $('#datetimepicker2').datetimepicker('minDate', e.date);
    console.log(e.date);
  });
  $("#datetimepicker2").on("change.datetimepicker", function (e) {
    $('#datetimepicker1').datetimepicker('maxDate', e.date);
  });
});