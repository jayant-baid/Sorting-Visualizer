async function merge(element, s, e) {
    const mid = Math.floor((s + e) / 2);
    const len1 = mid - s + 1;
    const len2 = e - mid;

    let leftarr = new Array(len1);
    let rightarr = new Array(len2);

    // COPY VALUES
    let mainArrayIndex = s;
    // First Array
    for (let i = 0; i < len1; i++) {
        await delay(time);
        element[s + i].style.background = LEFT;
        leftarr[i] = element[mainArrayIndex + i].style.height;
    }

    // Second Array
    mainArrayIndex = mid + 1;
    for (let i = 0; i < len2; i++) {
        await delay(time);
        element[mainArrayIndex + i].style.background = RIGHT;
        rightarr[i] = element[mainArrayIndex + i].style.height;
    }

    // MERGE 2 SORTED ARRAYS(LOGIC)
    let index1 = 0, index2 = 0;
    mainArrayIndex = s;

    while (index1 < len1 && index2 < len2) {
        await delay(time);
        if (parseInt(leftarr[index1]) < parseInt(rightarr[index2])) {
            if ((len1 + len2) == element.length) {
                element[mainArrayIndex].style.background = SORTED;
            }
            else {
                element[mainArrayIndex].style.background = TEMPSORTED;
            }
            element[mainArrayIndex].style.height = leftarr[index1];
            index1++;
            mainArrayIndex++;
        }

        else {
            if ((len1 + len2) == element.length) {
                element[mainArrayIndex].style.background = SORTED;
            }

            else {
                element[mainArrayIndex].style.background = TEMPSORTED;
            }
            element[mainArrayIndex].style.height = rightarr[index2];
            index2++;
            mainArrayIndex++;
        }
    }

    while (index1 < len1) {
        await delay(time);
        if ((len1 + len2) == element.length) {
            element[mainArrayIndex].style.background = SORTED;
        }

        else {
            element[mainArrayIndex].style.background = TEMPSORTED;
        }
        element[mainArrayIndex].style.height = leftarr[index1];
        index1++;
        mainArrayIndex++;
    }

    while (index2 < len2) {
        await delay(time);
        if ((len1 + len2) == element.length) {
            element[mainArrayIndex].style.background = SORTED;
        }

        else {
            element[mainArrayIndex].style.background = TEMPSORTED;
        }
        element[mainArrayIndex].style.height = rightarr[index2];
        index2++;
        mainArrayIndex++;
    }
}

async function mergeSort(element, s, e) {
    if (s >= e) {
        return;
    }
    const mid = Math.floor((s + e) / 2);
    await mergeSort(element, s, mid);
    await mergeSort(element, mid + 1, e);
    await merge(element, s, e);
}

document.getElementById('merge').addEventListener('click', async function () {
    let element = document.querySelectorAll('.sort');
    let s = 0;
    let e = parseInt(element.length) - 1;
    disableSizeSlider();
    disableSortingBtn();
    await mergeSort(element, s, e);
    enableSizeSlider();
    enableSortingBtn();
});