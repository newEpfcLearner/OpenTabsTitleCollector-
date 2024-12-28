chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and ready to use!");
  });
  
  // When the extension is activated, retrieve all open tabs
  chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        console.log(`Title: ${tab.title} | URL: ${tab.url}`);
      });
    });
  });
