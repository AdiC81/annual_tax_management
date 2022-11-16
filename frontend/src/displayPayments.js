"use strict"

import { showSum } from "./filterTaxes2";
import { sumUp } from "./sumUp";

export const tableRow = document.querySelector('.list');
export const formWrapper = document.querySelector('.formWrapper');
export const table = document.querySelector('table');
export const closeBtn = document.createElement('button');
closeBtn.className = "close closeBtn";
closeBtn.textContent = "X";
formWrapper.appendChild(closeBtn);


export function displayPayments(flag, element, array) {
    closeBtn.classList.remove('close');
    table.classList.remove('close');

    const html = array.map(element => {
        return `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.asset}</td>
            <td>${element.year}</td>
            <td>${element.amount}</td>
            <td>${element.status}</td>
        </tr>
            `;
    }).join('');
    if (flag) {
        sumUp(element, array);
        return tableRow.innerHTML = html;
    }
    html.length > 0 ?
        (tableRow.innerHTML = html, sumUp(element, array)) :
        (tableRow.innerHTML = "", showSum.innerHTML = "No taxes found!");
}