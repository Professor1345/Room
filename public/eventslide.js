let counter = 0;
let bG;
let firstboxHeader;
let firstboxContent;
// Less Than
let lessThan = document.querySelectorAll(".less-than");

lessThan.forEach((box) => {
  box.addEventListener("click", counterFuncMinus);
  function counterFuncMinus() {
    if (counter == 0) {
      counter += 3;
    }
    --counter;
    // alert(screen.availWidth);

    switch (counter) {
      case 0:
        bG =
          screen.availWidth >= 768
            ? "url('./images/desktop-image-hero-1.jpg')"
            : "url('./images/mobile-image-hero-1.jpg')";
        firstboxHeader = "Discover innovative ways to decorate";
        firstboxContent =
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
        break;
      case 1:
        bG =
          screen.availWidth >= 768
            ? "url('./images/desktop-image-hero-2.jpg')"
            : "url('./images/mobile-image-hero-2.jpg')";
        firstboxHeader = "We are available all across the globe";
        firstboxContent =
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
        break;
      case 2:
        bG =
          screen.availWidth >= 768
            ? "url('./images/desktop-image-hero-3.jpg')"
            : "url('./images/mobile-image-hero-3.jpg')";
        firstboxHeader = "Manufactured with the best materials";
        firstboxContent =
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }
    document.querySelector(".fb-first").style.backgroundImage = bG;
    document.getElementsByClassName("fbt-header")[0].innerHTML = firstboxHeader;
    document.getElementsByClassName("fbt-content")[0].innerHTML = firstboxContent;

  }
});

// Greater Than
let greaterThan = document.querySelectorAll(".greater-than");
greaterThan.forEach((box) => {
  box.addEventListener("click", counterFuncPlus);

  function counterFuncPlus() {
    if (counter >= 2) {
      counter -= 3;
    }
    ++counter;
    // alert(screen.availWidth);

    switch (counter) {
      case 0:
        bG =
          screen.availWidth >= 768
            ? "url('./images/desktop-image-hero-1.jpg')"
            : "url('./images/mobile-image-hero-1.jpg')";
        firstboxHeader = "Discover innovative ways to decorate";
        firstboxContent =
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
        break;
      case 1:
        bG =
          screen.availWidth >= 768
            ? "url('./images/desktop-image-hero-2.jpg')"
            : "url('./images/mobile-image-hero-2.jpg')";
        firstboxHeader = "We are available all across the globe";
        firstboxContent =
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
        break;
      case 2:
        bG =
          screen.availWidth >= 768
            ? "url('./images/desktop-image-hero-3.jpg')"
            : "url('./images/mobile-image-hero-3.jpg')";
        firstboxHeader = "Manufactured with the best materials";
        firstboxContent =
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }
    document.querySelector(".fb-first").style.backgroundImage = bG;
    document.getElementsByClassName("fbt-header")[0].innerHTML = firstboxHeader;
    document.getElementsByClassName("fbt-content")[0].innerHTML = firstboxContent;
    
  }
});
// Mobile
