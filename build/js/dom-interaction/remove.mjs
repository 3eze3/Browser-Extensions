export function removeCards() {
    const $cards = document.querySelectorAll('.extencion');
    const $removeCards = document.querySelectorAll('.extencion__remove');
    $removeCards.forEach(($btn, index) => {
        $btn.addEventListener('click', () => {
            $cards[index]?.remove();
        });
    });
}
