const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    indicators.forEach(ind => ind.classList.remove('active'));
    indicator.classList.add('active');
  });
});
function togglePanel(element) {
  var panelGroup = document.querySelector('.panel-group');
  var panels = panelGroup.querySelectorAll('.panel-body');
  var arrows = panelGroup.querySelectorAll('.arrow');

  // Close all panels and reset arrows
  panels.forEach(function(panel) {
      panel.style.display = 'none';
  });
  arrows.forEach(function(arrow) {
      arrow.style.transform = 'rotate(0deg)';
  });

  // Open the clicked panel and rotate the arrow
  var panelBody = element.nextElementSibling;
  if (panelBody.style.display === 'block') {
      panelBody.style.display = 'none';
  } else {
      panelBody.style.display = 'block';
      element.querySelector('.arrow').style.transform = 'rotate(180deg)';
  }
}


// map
document.addEventListener('DOMContentLoaded', function() {
  const mapCon = document.querySelector('.mapcon');
  const mapWrap = document.getElementById('mapWrap');
  const toggleText = document.getElementById('toggleText');
  const closeText = document.getElementById('closeText');
  const mapIcon = document.getElementById('mapIcon');

  mapCon.addEventListener('click', function() {
      if (mapWrap.style.display === 'none') {
          mapWrap.style.display = 'block';
          toggleText.style.display = 'none';
          closeText.style.display = 'inline';
          mapIcon.classList.remove('fa-map-location');
          mapIcon.classList.add('fa-times'); 
      } else {
          mapWrap.style.display = 'none';
          toggleText.style.display = 'inline';
          closeText.style.display = 'none';
          mapIcon.classList.remove('fa-times');
          mapIcon.classList.add('fa-map-location');
      }
  });
});
// let slideIndex = 1;
// showSlides(slideIndex);
// // Function to show slides
// function showSlides(n) {
//     let slides = document.getElementsByClassName("mySlides");

//     // Correct out-of-bounds conditions
//     if (n > slides.length) {
//         slideIndex = 1; 
//     } 
//     if (n < 1) {
//         slideIndex = slides.length; 
//     }

//     // Hide all slides
//     for (let i = 1; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

    
//     slides[slideIndex - 1].style.display = "flex";
// }

// // Function to change slides
// function plusSlides(n) {
//     showSlides(slideIndex += n); // Increment or decrement the index and show slides
// }
// let slideIndex = 1;
// showSlides(slideIndex);

// // Function to change the current slide index
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Function to show the appropriate slide
// function showSlides(n) {
//     let slides = document.getElementsByClassName("mySlides");

//     // Correct out-of-bounds conditions
//     if (n > slides.length) {
//         slideIndex = 1; // Reset to first slide if we go beyond the last one
//     }
//     if (n < 1) {
//         slideIndex = slides.length; // Move to last slide if we go before the first one
//     }

//     // Hide all slides
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; // Hide every slide
//     }

//     // Show the current slide
//     slides[slideIndex - 1].style.display = "flex"; // Show only the current slide
// }

// let slideIndex = 0;
// showSlides(slideIndex);

// // Function to change the current slide index
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Function to show the appropriate slide
// function showSlides(n) {
//     let slides = document.getElementsByClassName("mySlides");

//     // Correct out-of-bounds conditions
//     if (n > slides.length) {
//         slideIndex = 1; 
//     }
//     if (n < 1) {
//         slideIndex = slides.length; // Move to last slide if we go before the first one
//     }

//     // Hide all slides
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; // Hide every slide
//     }

    // Show the current slide
//     slides[slideIndex - 1].style.display = "flex"; // Show only the current slide
// }
let slideIndex = 1;
let firstSlideVisible = true; 

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex); 
});


function plusSlides(n) {
    if (firstSlideVisible && n === 1) {
      
        document.getElementsByClassName("mySlides")[0].style.display = "none";
        firstSlideVisible = false;
    }
    slideIndex += n;
    showSlides(slideIndex);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    
    if (n > slides.length) {
        slideIndex = 1; 
    }
    if (n < 1) {
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "flex"; 
}
