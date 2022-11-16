import api from "./api";

const API_ROOT = 'http://localhost:4000';

export async function getPaymentsApi() {
    const result = await api.get(`${API_ROOT}/payments`);
    return await result.json();
}

export async function addPaymentApi(newTax) {
    const result = await api.post(`${API_ROOT}/payments`, newTax);
    return await result.json(); 
}

export async function updatePaymentApi(id, newStatus) {
    const result = await api.put(`${API_ROOT}/payments/${id}`, newStatus);
    return await result.json();
}

