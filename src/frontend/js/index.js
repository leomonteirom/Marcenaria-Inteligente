// http requests pelo axios para a API
const adicionarmoveis = (nome, imagem, preco, ambiente) => {
  axios.post('/moveis', {
    data: {
        nome: nome,
        imagem: imagem,
        preco: preco,
        ambiente: ambiente
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}
const modificarmoveis = (nome,imagem,preco, ambiente) => {
  
  axios.put('/moveis', {
  params: {
    id: id
  },
  data: {
    nome: nome,
    imagem: imagem,
    preco: preco,
    ambiente: ambiente
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

const deletarmoveis = (id) => {
axios.delete('/moveis', {
    params: {
        id: id
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
});
}

const mostrarmoveis = () => {
axios.get('/moveis', {})
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
});
}
// sistema de ordenação