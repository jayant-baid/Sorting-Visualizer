async function bubble() {
    const element = document.querySelectorAll(".sort");
    for (let i = 0; i < element.length - 1; i++) {

        for (let j = 0; j < element.length - i - 1; j++) {

            element[j].style.background = SELECTED;
            element[j + 1].style.background = COMPARE;

            if (parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                await delay(time);
                swap(element[j], element[j + 1]);
            }

            element[j].style.background = UNSORTED;
            element[j + 1].style.background = UNSORTED;
        }

        element[element.length - i - 1].style.background = SORTED;
    }
    element[0].style.background = SORTED;
}

document.getElementById("bubble").addEventListener("click", async function () {
    disableSizeSlider();
    disableSortingBtn();
    await bubble();
    enableSizeSlider();
    enableSortingBtn();
});