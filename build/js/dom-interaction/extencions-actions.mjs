export function filterExtencions() {
    const $buttonsConteiner = document.querySelector('.extensions__filter');
    const $extencions = document.querySelectorAll('.extencion');
    $buttonsConteiner.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.classList.contains('extensions__button'))
            return;
        const id = target.getAttribute('id');
        document
            .querySelector('.extensions__button--active')
            ?.classList.remove('extensions__button--active');
        target.classList.add('extensions__button--active');
        $extencions.forEach(($extencion) => {
            const $radioActive = $extencion?.querySelector('.extencion__input[value="active"]');
            const isActive = $radioActive.checked;
            if (id === 'all') {
                $extencion.classList.remove('extencion--hidden');
            }
            else if (id === 'active' && !isActive) {
                $extencion.classList.add('extencion--hidden');
            }
            else if (id === 'inactive' && isActive) {
                $extencion.classList.add('extencion--hidden');
            }
            else {
                $extencion.classList.remove('extencion--hidden');
            }
        });
    });
}
