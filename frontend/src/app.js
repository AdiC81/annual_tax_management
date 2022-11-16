'use strict';

import { getPaymentsApi } from "./api/locationsApi";
import { addPayment } from "./addPayment";
import { updatePayment } from "./updatePayment";
import { showTaxes } from "./filterTaxes2";
import { managePanelsTransition } from "./manageTransition";

export let users = [];

export async function getData() {
    users.push(...await getPaymentsApi());
}

function app() {
    getData();
    addPayment();
    updatePayment();
    showTaxes();
    managePanelsTransition();
}

app();