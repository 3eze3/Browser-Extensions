export function switchTheme() {
	const $btnToggleTheme = document.querySelector('.theme') as HTMLButtonElement
	const $logoDark = document.querySelector('.theme__logo-dark')
	const $logolight = document.querySelector('.theme__logo-light')
	$btnToggleTheme.addEventListener('click', () => {
		$logoDark?.classList.toggle('theme__logo-dark-show')
		$logolight?.classList.toggle('theme__logo-light-hidden')

		// Verificamos el tema actual y lo cambiamos
		const currentTheme = document.body.classList.contains('theme-light')
			? 'theme-light'
			: 'theme-dark'
		const newTheme =
			currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark'
		toggleClass(newTheme)
	})
}

function toggleClass(theme: string) {
	const body = document.body as HTMLBodyElement
	body.classList.remove('theme-dark', 'theme-light')
	body.classList.add(theme)

	localStorage.setItem('theme', theme)
}

window.onload = () => {
	const savedTheme = localStorage.getItem('theme') || 'theme-dark'
	toggleClass(savedTheme)
}
