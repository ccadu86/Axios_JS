// ############ GET #############################

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na requisição GET', error);
  });


// ############ POST #############################

const data = {
    username: 'usuário',
    password: 'senha'
  };
  
  axios.post('https://api.example.com/login', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erro na requisição POST', error);
    });

// ############ PUT #############################
  
const updatedData = {
    key: 'new value'
};
  
axios.put('https://api.example.com/resource/123', updatedData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erro na requisição PUT', error);
    });
  
// ############ DELETE #############################

axios.delete('https://api.example.com/resource/123')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na requisição DELETE', error);
  });
