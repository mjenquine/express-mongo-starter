/// ON LOAD ///
$(() => {
/////////////////////////////////////////////////////////////
  $(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
  });


$.ajax ({
  url: "https://www.googleapis.com/books/v1/volumes?q=flowers+intitle:keyes&key=AIzaSyCra6D8mmMShUgTWJ8w_s71UUDa5U1_-Xg",
  type: "get"
}).then(
  (data) => {
    console.log(data);
  },
  () => {
    console.log('no data');
  }
)
//////////////////////////////////////////////////////////////
})
