const url = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
let joke = "";
fetch(url)
  .then(res => {
    console.log("Sucess!", res);
    return res.json();
  })
  .then(res => {
    joke = res.value.joke;
    document.getElementsByClassName("punchline")[0].innerText = joke;

    // .innerText = joke;
    // document
    //   .getElementsByClassName("accordian")

    //   .addEventListener("click", function() {
    //     document.getElementsByClassName("punchline")[0].innerHtml = joke;
    //   });

    // console.log(joke);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
let acc = document.getElementsByClassName("accordion");
let i;
//let joke = res.json()[0].url;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
document
  .getElementsByClassName(".random")
  .addEventListener("click", location.reload);
document.location.reload;
