const autoClickButton = (xpath) => {
  // Checks if an element is visible on the page.
  const isVisible = (element) => {
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
  };

  // Set up a MutationObserver to monitor DOM changes.
  const observer = new MutationObserver(() => {
    const button = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    // If the button exists and is visible, click it.
    if (button && isVisible(button)) {
      button.click();
      console.log("ChatGPT Limit Removed! ;)");
    }
  });

  // Start observing the DOM for changes.
  observer.observe(document.body, {
    childList: true, // Monitors addition or removal of child nodes.
    subtree: true,   // Monitors changes in all descendant nodes.
  });
};

// Clicks 'Next Lesson' button dynamically.
autoClickButton("//button[@aria-label='Close']");