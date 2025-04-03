import { getData } from '../services/get-data.mjs';
export async function renderExtencions() {
    const extencions = await getData();
    const $extencionInfo = document.querySelectorAll('.extencion__wrapper');
    const $toggleExtencion = document.querySelectorAll('.extencion__radiogroup');
    extencions.map(({ logo, name, description, isActive }, index) => {
        const element = createTemplate({ logo, name, description, isActive });
        $extencionInfo[index]?.appendChild(element);
        const $radioInactive = $toggleExtencion[index]?.querySelector('.extencion__input[value="inactive"]');
        const $radioActive = $toggleExtencion[index]?.querySelector('.extencion__input[value="active"]');
        isActive ? ($radioActive.checked = true) : ($radioInactive.checked = true);
    });
}
function createTemplate({ logo, name, description, isActive, }) {
    const frament = document.createDocumentFragment();
    const $img = document.createElement('img');
    $img.classList.add('extencion__logo');
    $img.src = logo;
    $img.alt = name;
    const $div = document.createElement('div');
    $div.classList.add('extencion__information');
    const element = `
				<h3 class="extencion__name">${name}</h3>
				<p class="extencion__description">
					${description}
				</p>
	`;
    $div.innerHTML = element;
    frament.appendChild($img);
    frament.appendChild($div);
    return frament;
}
