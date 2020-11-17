// study event delegation
// https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1
// https://stackoverflow.com/questions/42111854/javascript-addeventlistener-on-all-created-li-elements

// Highlight list item when clicked
// TODO: clear previous click item
let currentSelection = document.getElementsByClassName('selected');
document.addEventListener("click", function (e) {
    if (e.target && e.target.matches('li')) {
        // clear selections with class 'selected'
        // currentSelection.style.border = '';
        currentSelection.classList.remove('selected');
        e.target.style.border = '1px solid gray';
        e.target.classList.add('selected');
    }
});