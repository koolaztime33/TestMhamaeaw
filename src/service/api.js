import axios from "axios";
let BaseUrl = "http://54.169.196.73:5000/";

async function apiservice({ method, path, body, token }) {
  try {
    let header = {
      "Content-Type": "application/json",
    };
    //"Barer"
    if (token != undefined) {
      header.Authorization = "Bearer " + token;
    }

    const response = await axios({
      method: method,
      data: body,
      url: BaseUrl + path,
      headers: header,
    });

    if (response.status == 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }

    return response;
  } catch (error) {
    return { data: error.response.data, status: error.response.status };
  }
}

async function apitest({ method, path, body }) {
  try {
    let header = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await axios({
      method: method,
      data: body,
      url: path,
      headers: header,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return { data: error.response.data };
  }
}

export { apiservice ,apitest};
