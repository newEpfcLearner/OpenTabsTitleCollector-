chrome.tabs.query({}, (tabs) => {
  const ul = document.getElementById('tabs-list');
  tabs.forEach((tab) => {
    const li = document.createElement('li');
    li.textContent = tab.title;
    ul.appendChild(li);
  });
});
