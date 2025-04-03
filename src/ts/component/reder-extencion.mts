import { getData } from '../services/get-data.mjs'
import { Extencion } from '../type/extencions-types.mjs'

export async function renderExtencions() {
	const extencions: Extencion[] = await getData()
	const $extencionInfo = document.querySelectorAll(
		'.extencion__wrapper'
	) as NodeListOf<HTMLDivElement>
	const $toggleExtencion = document.querySelectorAll(
		'.extencion__radiogroup'
	) as NodeListOf<HTMLDivElement>
	extencions.map(({ logo, name, description, isActive }, index) => {
		const element = createTemplate({ logo, name, description, isActive })
		$extencionInfo[index]?.appendChild(element)

		const $radioInactive = $toggleExtencion[index]?.querySelector(
			'.extencion__input[value="inactive"]'
		) as HTMLInputElement
		const $radioActive = $toggleExtencion[index]?.querySelector(
			'.extencion__input[value="active"]'
		) as HTMLInputElement

		isActive ? ($radioActive.checked = true) : ($radioInactive.checked = true)
	})
}

function createTemplate({
	logo,
	name,
	description,
	isActive,
}): DocumentFragment {
	const frament = document.createDocumentFragment()
	const $img = document.createElement('img') as HTMLImageElement
	$img.classList.add('extencion__logo')
	$img.src = logo
	$img.alt = name
	const $div = document.createElement('div') as HTMLDivElement
	$div.classList.add('extencion__information')
	const element = `
				<h3 class="extencion__name">${name}</h3>
				<p class="extencion__description">
					${description}
				</p>
	`
	$div.innerHTML = element

	frament.appendChild($img)
	frament.appendChild($div)
	return frament
}
