let listURL = window.location.href;
if (listURL.includes("shelf") && !listURL.includes("&per_page=100")){
    window.location.href += "&per_page=100";
}