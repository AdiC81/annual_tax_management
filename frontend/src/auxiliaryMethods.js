

export function generateSelectUserItems(array) {
    array.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    })
    const usersList = array.reduce(
        (previousValue, currentValue) => {
            if (!previousValue.includes(currentValue.name)) {
                return [...previousValue, currentValue.name]
            }
            return previousValue;
        }, ["--Select name--"],
    );
    return usersList;
}

export function generateSelectYearItems(array) {
    array.sort((a, b) => a.year - b.year);
    const yearsList = array.reduce(
        (previousValue, currentValue) => {
            if (!previousValue.includes(currentValue.year)) {
                return [...previousValue, currentValue.year]
            }
            return previousValue;
        }, ["--Select year--"],
    );
    return yearsList;
}

export function showUserItems(array, element) {
    const userNames = array.map(user => {
        return `
                <option>${user}</option>
        `})
    return element.innerHTML = userNames;
}

export function showYearItems(array, element) {
    const taxYears = array.map(year => {
        return `
                        <option>${year}</option>
                `})
    return element.innerHTML = taxYears;
}
