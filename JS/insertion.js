async function insertion() {
    const element = document.querySelectorAll('.sort');

    element[0].style.background = SORTED;
    for (let i = 1; i < element.length; i++) {
        element[i].style.background = SELECTED;

        let temp = element[i].style.height;
        let j = i - 1;

        while (j >= 0 && (parseInt(temp) < parseInt(element[j].style.height))) {
            element[j].style.background = COMPARE;
            element[j + 1].style.height = element[j].style.height;
            j--;

            await delay(time);
            for (let k = 0; k < i; k++) {
                element[k].style.background = SORTED;
            }
        }

        element[j + 1].style.height = temp;
        element[i].style.background = SORTED;
    }
}

document.getElementById("insertion").addEventListener("click", async function () {
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableSizeSlider();
    enableSortingBtn();
});