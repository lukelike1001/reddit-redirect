chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
    const { url } = details;
    console.log(url);
    
    // Check if the URL starts with "https://reddit.com"
    if (url.startsWith("https://reddit.com")) {

      // Redirect to new.reddit.com
      const redirectUrl = "https://new.reddit.com/";
      
      // Construct the redirect URL
      const redirectUrlObject = new URL(redirectUrl);
      const { origin, pathname, search } = new URL(url);
      redirectUrlObject.pathname = pathname;
      redirectUrlObject.search = search;
      
      // Redirect the navigation
      chrome.tabs.update(details.tabId, { url: redirectUrlObject.href });
    }
  });