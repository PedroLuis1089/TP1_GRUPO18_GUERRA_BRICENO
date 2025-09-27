/* funcion para ver informacion extra de la imagen vero */
const foto = document.getElementById('fotoPerfil');
const infoExtra = document.getElementById('infoExtra');

foto.addEventListener('click', () => {
    if (infoExtra.style.display === 'none') {
        infoExtra.style.display = 'block';
    } else {
        infoExtra.style.display = 'none';
    }
});