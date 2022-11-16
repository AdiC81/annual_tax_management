'use strict'

import { users } from "./app";
import { generateSelectUserItems, generateSelectYearItems, showUserItems, showYearItems } from "./auxiliaryMethods";
import { closeBtn, displayPayments, tableRow, table } from "./displayPayments";
import { updateBtn, updatedId } from "./updatePayment";

export const containers = document.querySelectorAll('.container');
export const loadLists = document.querySelectorAll('h3');
const userSelector = document.querySelector('#user-select');
const yearSelector = document.querySelector('#year-select');
const statusSelector = document.querySelector('#status-select');
export const showSum = document.querySelector('.sum');
const form = document.querySelector('#form');
const displayAllBtn = document.querySelector('.displayAll');

export function showTaxes() {

    const createLists = () => {
        console.log(users);
        const usersList = generateSelectUserItems(users);
        const yearsList = generateSelectYearItems(users);

        showUserItems(usersList, userSelector);
        showYearItems(yearsList, yearSelector);
    };

    const handleOnSubmit = e => {
        const data = new FormData(form);
        const values = Object.fromEntries(data);

        const currentName = values.name;
        const currentYear = values.year;
        const currentStatus = values.status;
        let pressedBtn;

        userSelector.options[0].removeAttribute('selected', '');
        yearSelector.options[0].removeAttribute('selected', '');
        statusSelector.options[0].removeAttribute('selected', '');

        e.preventDefault();

        if (currentName === "--Select name--") {
            if (currentYear === "--Select year--") {
                const filteredList = users.filter(user => user.status === currentStatus);
                return displayPayments(pressedBtn, showSum, filteredList);
            }
            if (currentStatus === "--Select status--") {
                const filteredList = users.filter(user => user.year === currentYear);
                return displayPayments(pressedBtn, showSum, filteredList);
            }
            const filteredList = users.filter(user => user.year === currentYear && user.status === currentStatus);
            return displayPayments(pressedBtn, showSum, filteredList);
        }
        if (currentYear === "--Select year--") {
            if (currentStatus === "--Select status--") {
                const filteredList = users.filter(user => user.name === currentName);
                return displayPayments(pressedBtn, showSum, filteredList);
            }
            const filteredList = users.filter(user => user.name === currentName && user.status === currentStatus);
            return displayPayments(pressedBtn, showSum, filteredList);
        }
        if (currentStatus === "--Select status--") {
            const filteredList = users.filter(user => user.name === currentName && user.year === currentYear);
            return displayPayments(pressedBtn, showSum, filteredList);
        }
        const filteredList = users.filter(user =>
            user.name === values.name &&
            user.year === values.year &&
            user.status === values.status
        );
        displayPayments(pressedBtn, showSum, filteredList);
    }

    function handleOnClick(e) {
        createLists();
        statusSelector.options[0].setAttribute('selected', '');
        const pressedBtn = e.target.value;
        displayPayments(pressedBtn, showSum, users);

        e.preventDefault();
    }

    const handleOnClose = e => {
        showSum.innerHTML = "";
        tableRow.innerHTML = "";
        closeBtn.classList.add('close');
        table.classList.add('close');
        userSelector.options[0].setAttribute('selected', '');
        yearSelector.options[0].setAttribute('selected', '');
        statusSelector.options[0].setAttribute('selected', '');

        e.preventDefault();
    }

    const handleReceiveUpdId = () => {
        if (updatedId) {
            const updatedStatusName = users.filter(user => user.id === updatedId);
            displayPayments(updatedId, showSum, updatedStatusName);
        }
    }

    updateBtn.addEventListener('click', handleReceiveUpdId);
    loadLists.forEach(list => list.addEventListener('click', createLists));
    form.addEventListener('submit', handleOnSubmit);
    displayAllBtn.addEventListener('click', handleOnClick);
    closeBtn.addEventListener('click', handleOnClose);
}