'use strict';

import { addPaymentApi } from "./api/locationsApi";
import { users } from "./app";
import { filterAssets } from "./filterAssets";

const wrapper = document.querySelector('.container_2');
const wrapperDiv = wrapper.querySelectorAll('.clearInput');
const saveBtn = document.querySelector('#save');
const selectAsset = document.querySelector("[name = asset]");
const infoMessage = document.createElement('div');
infoMessage.className = "message";
saveBtn.before(infoMessage);

export function addPayment() {
    let dataObj = {};

    const handleOnInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        dataObj[name] = value;

        if (name === "name") {
            selectAsset.options[0].removeAttribute('selected', '');
            filterAssets(name, value);
        }
        if (Object.keys(dataObj).length === 4) {
            if (dataObj.name === "--Select Name--" || dataObj.name === "") {
                saveBtn["disabled = true"] ? "" : saveBtn.setAttribute("disabled", "");
                dataObj.asset = "--Select Asset--";
                return infoMessage.textContent = "Please select a name";
            }
            if (dataObj.asset === "--Select Asset--") {
                saveBtn["disabled = true"] ? "" : saveBtn.setAttribute("disabled", "");
                return infoMessage.textContent = "Please select an asset";
            }
            if (dataObj.year < 0 || dataObj.year.length < 4 || dataObj.year.length > 4) {
                saveBtn["disabled = true"] ? "" : saveBtn.setAttribute("disabled", "");
                return infoMessage.textContent = "Please select a valid year";
            }
            if (dataObj.amount <= 0) {
                saveBtn["disabled = true"] ? "" : saveBtn.setAttribute("disabled", "");
                return infoMessage.textContent = "Please fill in a value for amount";
            }
            infoMessage.textContent = "";
            saveBtn.removeAttribute("disabled", '');
            return dataObj;
        }
    }

    const handleAddPayment = () => {
        users.sort((a, b) => a.id - b.id);
        let { id } = users;
        id = users[users.length - 1].id;
        const newPayment = { ...dataObj, id: id + 1, status: 'unpaid' };
        const duplicate = users.filter(obj =>
            obj.name === newPayment.name &&
            obj.asset === newPayment.asset &&
            obj.year === newPayment.year);

        if (duplicate.length === 0) {
            addPaymentApi(newPayment);
            users.push(newPayment);
            dataObj = {};
            filterAssets('', '');
            wrapperDiv.forEach(element => {
                if (element.name === "asset") {
                    element.options[0].setAttribute('selected', '');
                }
                else {
                    element.value = "";
                }
            });
            saveBtn["disabled = true"] ? "" : saveBtn.setAttribute("disabled", "");
        }
        else {
            infoMessage.textContent = "Double entry. There is another payment on that asset in the same year!";
            saveBtn.removeAttribute("disabled", '');
        }
    }

    wrapper.addEventListener('input', handleOnInput);
    saveBtn.addEventListener('click', handleAddPayment);
}
