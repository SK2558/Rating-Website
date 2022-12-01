const stars = document.querySelectorAll(".star");
const outputs = document.querySelector(".output");

for (x = 0; x < stars.length; x++) {
  // stars[x].addEventListener( 'click',function( ){
  //     console.log( "I am clicked" );
  // })
  stars[x].starValue = x + 1;

  ["click", "mouseover", "mouseout"].forEach(function (e) {
    stars[x].addEventListener(e, showRatings);
  });
}

function showRatings(e) {
  let type = e.type;

  let starValue = this.starValue;
  console.log(starValue);

  if (type === "click") {
    if (starValue > 1) {
      outputs.innerHTML = "you rated this" + "  "+  starValue + " stars";
    }
  }

  stars.forEach(function (elem, ind) {
    if (type === "click") {
      if (ind < starValue) {
        elem.classList.add("orange");
      } else {
        elem.classList.remove("orange");
      }
    }

    if (type === "mouseover") {
      if (ind < starValue) {
        elem.classList.add("yellow");
      } else {
        elem.classList.remove("yellow");
      }
    }

    if (type === "mouseout") {
      elem.classList.remove("yellow");
    }
  });
}

function nextPage() {
  window.location.reload();
}