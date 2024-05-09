chrome.action.onClicked.addListener(async (tab) => {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const currentUrl = activeTab.url;
    console.log(currentUrl);
  });