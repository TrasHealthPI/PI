function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Redirecionar ou executar ações após o login bem-sucedido
          alert('Login bem-sucedido!');
        } else {
          document.getElementById('error-message').innerText = 'Credenciais inválidas';
        }
      })
      .catch(error => console.error('Erro durante o login:', error));
  }