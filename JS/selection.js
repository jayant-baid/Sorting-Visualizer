async function selection() {
    const element = document.querySelectorAll(".sort");
    for (let i = 0; i < element.length; i++) {
        let minindex = i;
        element[i].style.background = SELECTED;
        for (let j = i + 1; j < element.length; j++) {
            element[j].style.background = COMPARE;
            if (parseInt(element[j].style.height) < parseInt(element[minindex].style.height)) {
                if (minindex !== i) {
                    element[minindex].style.background = UNSORTED;
                }
                minindex = j;
            }
            else {
                element[j].style.background = UNSORTED;
            }
        }

        await delay(time);
        swap(element[i], element[minindex]);

        element[minindex].style.background = UNSORTED;
        element[i].style.background = SORTED;
    }
}

document.getElementById("selection").addEventListener("click", async function () {
    disableSizeSlider();
    disableSortingBtn();
    await selection();
    enableSizeSlider();
    enableSortingBtn();
});