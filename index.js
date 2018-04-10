const token = 'f0323261bbbb7758ecc2ec542785be2e8741c3bc'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
