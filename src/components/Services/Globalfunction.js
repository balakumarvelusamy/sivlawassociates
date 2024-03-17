import config from "../../config.json";

const getpostbytitle = async (value) => {
  let id = value;
  await fetch(config.service_url + `getpost/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        let _filterData = data.data;
        if (_filterData) {
          return _filterData;
        }
      } else {
        return "No Result";
      }
    })
    .catch((err) => {
      return err;
    });
};

export { getpostbytitle };
