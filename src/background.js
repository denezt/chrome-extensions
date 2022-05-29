chrome.action.setTitle = 'Running Template';

chrome.action.onClicked.addListener(tab => { 
    console.log("Running, background script");
    console.log(tab);
    console.log(`Current URL: ${tab.url}`);
});