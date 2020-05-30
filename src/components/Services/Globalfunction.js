
//const domain='https://localhost:5001/api/'
const domain='https://tucservices.azurewebsites.net/api/'
const fetchService = async (controller, action, type, data) => {
  let url = domain + controller + '/' + action;
  const _fetch = type === 'Get' ? await fetch(url) : await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  console.log(_fetch);
  const _data = await _fetch;
  console.log(_data);
  return (_data.status === 200) ? _data.text().then(function (text) { return text ? JSON.parse(text) : {} }) :
  (_data.status === 500) ? "UNIQUEKEY":
  _data.status
  // return  _data.text().then(function(text) {
  //   return text ? JSON.parse(text) : {}
  //  });  

}

export { fetchService };
