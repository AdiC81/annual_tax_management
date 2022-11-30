'use strict';

// INITIAL VERSION KEPT FOR REFERENCE ONLY

import { users } from "./app";
import { sumUp } from "./sumUp";
import { displayPayments } from "./displayPayments";

const statusSelector = document.querySelector('#status-select');
const yearSelector = document.querySelector('#year-select');
const userSelector = document.querySelector('#user-select');
const wrapper_1 = document.querySelector('.container_1');

export const showSum = document.createElement('div');
showSum.className = "sum";
userSelector.after(showSum);

// const displayAll = document.createElement('div');
// displayAll.textContent = "Show all";
// displayAll.className = "all";
// displayAll.style.textAlign = 'center';
// displayAll.style.paddingTop = '10px';
// showSum.before(displayAll);

export function filterTaxes() {
    let name;
    let value;
    const array = [];

    const handleOnStatus = e => {
        name = e.target.name;
        value = e.target.value;

        array.push([e.target.name, e.target.value]);
        const obj = Object.fromEntries(array);
        console.log(obj);

        if (obj.status && +obj.year) {
            if (obj.name) {
                console.log("caz7");
                const results = users.filter(e =>
                    obj.status === e.status && +obj.year === +e.year && obj.name === e.name)
                console.log(results);
                sumUp(results);
                return displayPayments(results);
            }
            console.log("caz1");
            const results = users.filter(e =>
                obj.status === e.status && +obj.year === +e.year)
            console.log(results);
            sumUp(results);
            return displayPayments(results);
        }
        if (obj.status && obj.name) {
            console.log("caz2");
            const results = users.filter(e =>
                obj.status === e.status && obj.name === e.name)
            console.log(results);
            sumUp(results);
            return displayPayments(results);
        }
        if (obj.name && +obj.year) {
            console.log("caz3");
            const results = users.filter(e =>
                obj.name === e.name && +obj.year === +e.year)
            console.log(results);
            sumUp(results);
            return displayPayments(results);
        }
        console.log("caz5");
        const results = users.filter(e =>
            obj.status === e.status || +obj.year === +e.year || obj.name === e.name)
        console.log(results);
        sumUp(results);
        return displayPayments(results);
    }

    const handleShowAll = () => {
        array.splice(0);
        statusSelector.value = "";
        yearSelector.value = "";
        userSelector.value = "";
        sumUp(users);
        return displayPayments(users);
    }

    wrapper_1.addEventListener('change', handleOnStatus);
    displayAll.addEventListener('click', handleShowAll);
}

