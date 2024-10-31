
  //pega uma lista de todos os inputs com o nome slider(no caso as coisas para mudar as imagens da tela)
  const radios = document.querySelectorAll('input[name="slider"]');
 
  //cria uma variavel com o valor 0 que ira ser usada para pegar a tela que voce deseja
  let index = 0;

  //mudança automatica de slide
  function changeSlide() {
    
    //ele vai checar se a tela esta sendo mostrada
      radios[index].checked = true; 

// ele vai adicionar 1 para o index vai dividir e pegar o resto
      index = (index + 1) % radios.length; 
  }

  //seta um intervalo até que essa funçao aconteça
  setInterval(changeSlide, 3000);
