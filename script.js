const imagens = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const imagemAmpliada = document.getElementById('imagem-ampliada');
const fechar = document.getElementById('fechar');

imagens.forEach(img => {
  img.addEventListener('click', () => {
    imagemAmpliada.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

fechar.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
