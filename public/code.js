// Function to open the mobile navigation
const openButton = () => {
  // Get the mobile navigation element
  let navMobile = document.getElementsByClassName("navMobile")[0];
  // Set its display style to "block" to make it visible
  navMobile.style.display = "block";
};

// Function to close the mobile navigation
const closeButton = () => {
  // Get the mobile navigation element
  let navMobile = document.getElementsByClassName("navMobile")[0];
  // Set its display style to "none" to hide it
  navMobile.style.display = "none";
};

// The commented-out code below appears to be an attempt to handle navigation visibility based on screen width,
// but it's currently disabled (commented out).

// if (screen.width == '1024') {
//     let navMobile = document.getElementsByClassName("navMobile")[0];
//     navMobile.style.display = 'none';
// } else {
//     let navMobile = document.getElementsByClassName("navMobile")[0];
//     navMobile.style.display = 'none';
// }

// Event listener for resizing (currently commented out)
// document.addEventListener('resize', function () {
//     let navMobile = document.querySelector("div.navMobile");

//     // console.log(screen.width);
//     // Set display based on window width
//     window.innerWidth >= 780 ? (navMobile.style.display = 'none') : (navMobile.style.display = 'none');
// });
