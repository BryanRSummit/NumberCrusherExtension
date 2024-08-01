chrome.commands.onCommand.addListener((command) => {
    if (command === "scrape-numbers") {
      chrome.storage.sync.get('enabled', function(data) {
        if (data.enabled) {
          chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.scripting.executeScript({
              target: {tabId: tabs[0].id},
              files: ['scraper.js']
            });
          });
        } else {
          console.log('Extension is disabled');
        }
      });
    }
  });