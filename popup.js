document.addEventListener('DOMContentLoaded', function() {
    var toggleSwitch = document.getElementById('toggleSwitch');
  
    // Load the current state
    chrome.storage.sync.get('enabled', function(data) {
      toggleSwitch.checked = data.enabled;
    });
  
    // Save the state when the switch is toggled
    toggleSwitch.addEventListener('change', function() {
      chrome.storage.sync.set({enabled: this.checked}, function() {
        console.log('Extension is now ' + (this.checked ? 'enabled' : 'disabled'));
      });
    });
  });