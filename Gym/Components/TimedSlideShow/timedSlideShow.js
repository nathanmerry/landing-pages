let heroImages =
  // String with URLs of images you want to include in the hero
  "url('./images/Wallpaper/wallpaper1.png') url('./images/Wallpaper/wallpaper3.png') url('./images/Wallpaper/wallpaper2.jpg')";
const imgArr = heroImages.split(" "); // Variable of URL's put into the array
const heroImage = document.getElementById("slideImage").style; // Variable with hero DOM object stored

// Function setting the Hero Image
const setHeroImageTimed = seconds => {
  miliseconds = seconds * 1000;
  var x = 0;
  heroImage.backgroundImage = imgArr[0];
  const changeImage = setInterval(() => {
    if (x < imgArr.length - 1) {
      x = x + 1;
    } else {
      x = 0;
    }
    heroImage.backgroundImage = imgArr[x];
  }, miliseconds);
};

// Function call - Parameter is the number of seconds before each slide change
setHeroImageTimed(5);

