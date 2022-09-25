async function partion(element, s, e) {
    let pivot = s - 1;

    element[e].style.background = SELECTED;

    for (let i = s; i <= e - 1; i++) {
        element[i].style.background = COMPARE;
        await delay(time);
        if (parseInt(element[i].style.height) < parseInt(element[e].style.height)) {

            if (pivot >= s) {
                element[pivot].style.background = UNSORTED;
            }

            pivot++;
            swap(element[pivot], element[i]);
            element[pivot].style.background = LEFT;

            await delay(time);
        }
        element[i].style.background = UNSORTED;
    }
    if (pivot >= s) {
        element[pivot].style.background = UNSORTED;
    }

    await delay(time);
    swap(element[pivot + 1], element[e]);

    element[e].style.background = UNSORTED;
    element[pivot + 1].style.background = TEMPSORTED;

    await delay(time);

    return pivot + 1;
}

async function quicksort(element, s, e) {

    if (s >= e) {
        return;
    }

    let pivot = await partion(element, s, e);

    await quicksort(element, s, pivot - 1);
    await quicksort(element, pivot + 1, e);

}

document.getElementById('quick').addEventListener('click', async function () {
    let element = document.querySelectorAll('.sort');
    let s = 0;
    let e = parseInt(element.length) - 1;
    disableSizeSlider();
    disableSortingBtn();
    await quicksort(element, s, e);
    for (let i = 0; i <= e; i++) {
        await delay(time);
        element[i].style.background = SORTED;
    }
    enableSizeSlider();
    enableSortingBtn();
});