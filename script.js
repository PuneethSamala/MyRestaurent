$(document).ready(function () {
    // Handle scroll event
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });

    // Function to get the current year
    function newDate() {
      return new Date().getFullYear();
    }

    // Set the current year in the element with id 'autodate'
    $("#autodate").text(newDate());
});
