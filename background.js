//* Regex for youtube shorts
// const shortsRegex = /https?:\/\/(?:www\.)?youtube\.com\/shorts\//;

//* Regex for vk.com/docs
// const vkDocsRegex = /https?:\/\/(?:www\.)?vk\.com\/docs/;

//* Priority Sites
const prioritySites = [
    'vk.com/docs',
    'libgen.is',
    'libgen.is/fiction',
    'forum.mobilism.org',
];

chrome.action.onClicked.addListener((tab) => {
    const tabURL = tab.url;

    //* Converts Youtube shorts to Youtube video in a new tab
    // if (shortsRegex.test(tabURL))
    if (tabURL.includes('youtube.com/shorts/')) {
        const vidURL = tabURL.replace('shorts/', 'watch?v=');
        chrome.tabs.create({
            url: vidURL,
            selected: true,
        });
    }

    //* Move priority sites to the front of the window tab list
    let priorityResult = prioritySites.some((site) => tabURL.includes(site));
    if (priorityResult) {
        chrome.tabs.move(tab.id, { index: 1 });
        // function movePriritySite() {
        //     for (let i = 1; i < 5; i++){
        //         if (tab[i].url
        //     }
        // }
        // chrome.tabs.query().then(movePriritySite)
    }
});
