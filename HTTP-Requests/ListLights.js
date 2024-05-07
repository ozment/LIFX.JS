const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'cbc4802859ff01a21ffb484ca14a0e738093df9f76cffb1f3b0f604d44d6e1d0'
  }
};

fetch('https://api.lifx.com/v1/lights/selector', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
