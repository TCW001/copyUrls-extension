chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({}, function(tabs) {
      let urls = tabs.map(tab => tab.url);
      chrome.runtime.sendMessage({ command: "urls", data: urls });
    });
  });
  