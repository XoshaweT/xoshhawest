

  const images = [" https://cdn.phototourl.com/free/2026-05-26-955b95c1-737b-41fd-ab6e-8ef3103da2c4.jpg ",
  "https://cdn.phototourl.com/pro/2026-05-26-5ffd0461-dfa5-4af5-bfa2-c1358897978e.png",
  "https://cdn.phototourl.com/pro/2026-05-27-94472995-f895-4c18-a5be-cb5148d3a006.png",
  "https://cdn.phototourl.com/pro/2026-05-26-fd01e2ed-d953-456b-ac67-24e411c72665.png"];
  
  // Your image list
  let index = 0;

  function changeImage() {
    index = (index + 1) % images.length; // Loop back to start after last image
    document.getElementById("mySlide fade").src = images[index];
  }

  // Change image every 3 seconds (3000 milliseconds)
  setInterval(changeImage, 1000); 
  
  
  
