if (typeof earthquakeActive === "undefined") {
  let earthquakeActive = false; // State to track if the earthquake is running
  let interval;

  // console.log("Earthquake script injected");

  function startEarthquake() {
    if (earthquakeActive) return; // Prevent starting if already active
    earthquakeActive = true;
    // console.log("Starting earthquake effect");
    const magnitude = 20;
    interval = setInterval(() => {
      document.querySelectorAll("*").forEach((el) => {
        el.style.transform = `translate(${
          Math.random() * magnitude - magnitude / 2
        }px, ${Math.random() * magnitude - magnitude / 2}px)`;
      });
    }, 100);
  }

  function stopEarthquake() {
    if (!earthquakeActive) return; // Prevent stopping if not active
    clearInterval(interval);
    document.querySelectorAll("*").forEach((el) => {
      el.style.transform = "none";
    });
    earthquakeActive = false;
    // console.log("Stopped earthquake effect");
  }

  browser.runtime.onMessage.addListener((message) => {
    // console.log("Received message:", message);
    if (message.action === "toggleEarthquake") {
      // console.log("Toggling earthquake. Current state:", earthquakeActive);
      if (earthquakeActive) {
        stopEarthquake();
      } else {
        startEarthquake();
      }
      // console.log("Earthquake active:", earthquakeActive);
    }
  });
} else {
  // console.log("Earthquake script already running");
}
