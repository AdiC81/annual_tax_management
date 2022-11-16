const assetField = document.querySelector('[name = asset]');

const anaAssets = ["--Select Asset--", "ap Titan etaj 10", "ap Berceni etaj 3", "masina Skoda"];
const vioAssets = ["--Select Asset--", "gars Sadului etaj 10"];
const adiAssets = ["--Select Asset--", "1/2 ap Titan etaj 4", "ap Ressu etaj 2", "teren Breaza", "1/3 teren Calitei", "1/2 masina Mazda", "masina Nissan", "1/2 parcare Titan"];
const iriAssets = ["--Select Asset--", "1/2 ap Titan etaj 4", "gars Titan etaj 9", "1/3 teren Calitei", "1/2 parcare Titan", "1/3 ap mama Iri", "1/2 masina Mazda"];
const byDefault = ["--Select Asset--"];

export function filterAssets(name, value) {
    let asset;
    const obj = {};
    obj[name] = value;

    switch (obj[name]) {
        case 'Ana':
            asset = anaAssets.map(asset => {
                return `
                        <select>
                        <option>${asset}</option>
                        </select>
                    `
            })
            break;

        case 'Vio':
            asset = vioAssets.map(asset => {
                return `
                        <option>${asset}</option>
                    `
            })
            break;

        case 'Adi':
            asset = adiAssets.map(asset => {
                return `
                        <option>${asset}</option>
                    `
            })
            break;

        case 'Iri':
            asset = iriAssets.map(asset => {
                return `
                        <option>${asset}</option>
                    `
            })
            break;

        default:
            asset = byDefault.map(asset => {
                return `
                        <option>${asset}</option>
                    `
            })
    }
    assetField.innerHTML = asset;
}