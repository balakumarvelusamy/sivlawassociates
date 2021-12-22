
import config from "../../config.json";

//const domain='https://localhost:5001/api/'
const domain = 'https://tucservices.azurewebsites.net/api/'
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
    (_data.status === 500) ? "UNIQUEKEY" :
      _data.status
  // return  _data.text().then(function(text) {
  //   return text ? JSON.parse(text) : {}
  //  });  

}


const getpostbytitle = async (value) => {
  let id = value;
  await fetch(config.service_url + `getpost/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        let _filterData = data.data.filter((blog) => blog.posttypevalue === "Blog");
        if (_filterData) {
          return _filterData;
        }
      } else {
        return "No Result"
      }
    })
    .catch((err) => {
      return err;
    });
};

const sendMail = async (body, toemail, toname, subject) => {
  // const body = "<p>Hello " + data.c_name + "," + "</p>" + "<p>Thanks for reaching us, we will get back to you shorlty.</p>" + "<br/><p>Regards,</p> <p><a href='https://www.tsalastudio.com'>Tsala Studio Team</a></p>" + "<table  style='border: 1px solid black'>" + " <tr  style='border: 1px solid black'><td> <i>Name:</i></td> <td> <i>" + data.c_name + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Email:</i></td><td> <i>" + data.c_email + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Message:</i></td><td> <i>" + data.c_message + "</i></td></tr>" + "</table>";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: config.fromemail,
      to: toemail + "," + config.fromemail,
      subject: subject + toname,
      text: "",
      html: body,
    }),
  };
  console.log(requestOptions);
  try {
    fetch(config.email_service_url, requestOptions)
      .then((response) => { return response; }
      );

  } catch (err) {
    return err;
  }

};


export { fetchService, getpostbytitle, sendMail };
