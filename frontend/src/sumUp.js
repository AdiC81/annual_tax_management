'use strict';

export function sumUp(element, array) {
    if (array) {
        let initialValue = 0;
        const sum = array.reduce(function (previousValue, currentValue) {
            return previousValue + +currentValue.amount;
        }, initialValue)
        if (sum === 0) return;
        return element.textContent = `Total amount: ${sum}`;
    }
}