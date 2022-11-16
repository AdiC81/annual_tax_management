'use strict';

import { updatePaymentApi } from "./api/locationsApi";
import { users } from "./app";

const id = document.querySelector('#id');
const select = document.querySelector('#status');
export const updateBtn = document.querySelector('#update');

export let updatedId;

export function updatePayment() {
    const infoMessage = document.createElement('div');
    infoMessage.className = "message";
    select.after(infoMessage);

    let array = [];
    let newStatus = {};
    let updateId;

    const handleGetUpdateId = e => {
        array = users.filter(user => user.id == e.target.value);
        if (array.length === 1) {
            select.removeAttribute("disabled");
            infoMessage.textContent = "";
            return updateId = e.target.value
        }
        else {
            select.setAttribute("disabled", true);
            infoMessage.textContent = "Please insert a valid id";
        }
    }

    const handleChangeStatus = e => {
        if (e.target.value) {
            array.forEach(el => {
                const obj = {
                    ...el,
                    status: e.target.value
                }
                Object.assign(newStatus, obj);
                updateBtn.removeAttribute("disabled");
                infoMessage.textContent = "";
            })
        }
        else {
            updateBtn.setAttribute("disabled", true);
            infoMessage.textContent = "Please insert a valid status";
        }
    }

    const handleOnClick = () => {
        if (array.length === 0) {
            infoMessage.textContent = "Please insert a valid id";
        }
        else {
            updatePaymentApi(updateId, newStatus);
            const index = users.findIndex(element => element.id === newStatus.id);
            users.splice(index, 1, newStatus);
            updatedId = newStatus.id;
            newStatus = {};
            id.value = "";
            select.value = "";
            updateBtn.setAttribute("disabled", true);
        }
    }

    const handleTransmitUpdateId = () => {
        return updatedId;
    }

    updateBtn.addEventListener('click', handleTransmitUpdateId)
    id.addEventListener('input', handleGetUpdateId);
    select.addEventListener('change', handleChangeStatus);
    updateBtn.addEventListener('click', handleOnClick);
}