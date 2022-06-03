var chavePix = 'luiza.rocha@gmail.com';
const btnColabora = document.querySelector('.btnColabora')

function copiar() {
    navigator.clipboard.writeText(chavePix);
}

function teste() {
    alert('A chave foi Copiada!')
}

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    if (modal) {
        modal.classList.add('mostrar')
        modal.addEventListener('click', function (e) {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

btnColabora.addEventListener('click', function () {
    iniciaModal('modal-promocao')
});

