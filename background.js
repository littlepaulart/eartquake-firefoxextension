browser.browserAction.onClicked.addListener((tab) => {
  try {
    // Check if the tab is valid
    if (!tab || !tab.id) {
      console.error("Invalid tab:", tab);
      return;
    }

    // Send a message to toggle the earthquake effect
    console.log("Sending message to content script");
    browser.tabs.sendMessage(tab.id, { action: "toggleEarthquake" });
  } catch (error) {
    console.error("Error messaging content script:", error);
  }
});
