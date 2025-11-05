window.addEventListener("load", () => {
  const hello = document.getElementById("hello");
  const greetings = ["Hello", "Hello", "হ্যালো", "नमस्ते"];
  let index = 0;

  function showGreeting() {
    hello.style.opacity = 0;
    setTimeout(() => {
      hello.textContent = greetings[index];
      hello.style.opacity = 1;
    }, 300);

    index++;
    if (index < greetings.length) {
      setTimeout(showGreeting, 600);
    } else {
      setTimeout(() => {
        document.getElementById("preloader").classList.add("fade-out");
        document.getElementById("mainContent").style.opacity = "1";
      }, 600);
    }
  }

  showGreeting();
});
