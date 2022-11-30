const assetField = document.querySelector('[name = asset]');

const anaAssets = ["--Select Asset--", "Titan - ap 69", "Berceni - ap 213", "Skoda - an 2015"];
const vioAssets = ["--Select Asset--", "Titan - gars 242"];
const adiAssets = ["--Select Asset--", "Titan - ap 12", "Ressu - ap 29", "Breaza - teren 2000 mp", "Mazda - an 2019", "Titan - parcare 16"];
const iriAssets = ["--Select Asset--", "Titan - ap 218"];
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