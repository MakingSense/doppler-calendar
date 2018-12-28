// Scroll in click Months
var month = document.getElementsByClassName("button__month");
var i;

for (i = 0; i < month.length; i++){
  month[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content__month = this.nextElementSibling;
    if (content__month.style.display === "block") {
      content__month.style.display = "none";
    } else {
      content__month.style.display = "block";
    }
  });
}
