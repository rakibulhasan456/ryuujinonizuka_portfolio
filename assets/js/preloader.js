window.addEventListener("load", () => {
  const hello = document.getElementById("hello");
  const greetings = ["Hello", "Hello", "হ্যালো", "नमस्ते", "こんにちは"];
  let index = 0;

  function showGreeting() {
    hello.style.opacity = 0;
    setTimeout(() => {
      hello.textContent = greetings[index];
      hello.style.opacity = 1;
    }, 250);

    index++;
    if (index < greetings.length) {
      setTimeout(showGreeting, 500);
    } else {
      setTimeout(() => {
        document.getElementById("preloader").classList.add("fade-out");
        document.getElementById("mainContent").style.opacity = "1";
      }, 400);
    }
  }

  showGreeting();
});
