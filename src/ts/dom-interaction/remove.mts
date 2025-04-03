export function removeCards() {
	const $cards = document.querySelectorAll(
		'.extencion'
	) as NodeListOf<HTMLElement>

	const $removeCards = document.querySelectorAll(
		'.extencion__remove'
	) as NodeListOf<HTMLButtonElement>

	$removeCards.forEach(($btn, index) => {
		$btn.addEventListener('click', () => {
			$cards[index]?.remove()
		})
	})
}
