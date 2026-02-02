function scrollToNext() {
  document.querySelector('.message').scrollIntoView({ behavior: 'smooth' });
}

function yes() {
  document.getElementById("reply").innerHTML =
    "You just made me the happiest person ❤️🥰";
}
