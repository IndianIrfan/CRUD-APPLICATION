// CRUD APP (JS CODE)
var time = gsap.timeline();
time.from(".navigation h4", {
  y: -80,
  duration: 0.5,
});

time.from(".navigation h3", {
  x: -580,
  duration: 0.5,
});
time.from(".navigation h2", {
  x: 800,
  duration: 1.0
});
time.from(".navigation h1", {
  x: 800,
  duration: 1.0
});
time.from("form i", {
  x: -50,
  duration: 0.8,
  yoyo: true,
  repeat: -1
});
var link = document.getElementById("cont");
document.getElementById('next').addEventListener('click', function () {
  var inputFieldValue = document.getElementById('text1').value;
  if (inputFieldValue == '') {
    alert('please enter your name');
    link.href = "";
  }
  var maxLength = 12;

  if (inputFieldValue.length > maxLength) {
    alert("please enter a short name not more than 12 characters");
    link.href = "";
  }

});
function saveData() {
  var value = document.getElementById("text1").value;
  localStorage.setItem("storedValue", value);
}