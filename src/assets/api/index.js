import axios from "axios";
import { endpoint } from "./endpoint";

async function createRequest({ headers, params }) {
  // Get the authToken from cookies
  const getAuthTokenFromCookie = () => {
    const cookies = document.cookie.split("; ");
    const authCookie = cookies.find((cookie) => cookie.startsWith("authToken="));
    return authCookie ? authCookie.split("=")[1] : null;
  };

  const authToken = getAuthTokenFromCookie();

  return axios.create({
    // baseURL: endpoint.BASE_URL_STAGING,
    responseType: "json",
    crossdomain: true,
    headers: {
      "Content-Type": headers?.["Content-Type"] || "application/json",
      Accept: "application/json",
      Authorization: authToken ? `Bearer ${authToken}` : undefined,
      ...headers,
    },
    params,
  });
}

export default createRequest;

export const handleCatchBlock = () => {
  console.log("Something went wrong fetching apis");
};

export async function apiHandler({
  url,
  method,
  headers: reqHeaders,
  data: jsonData,
  params,
  authToken,
}) {
  try {
    const request = await createRequest({ reqHeaders, params, authToken });
    let result = [];
    switch (method) {
      case "POST":
        result = await request.post(url, jsonData);
        break;

      case "DELETE":
        result = await request.delete(url);
        break;
      case "PUT":
        result = await request.put(url, jsonData);
        break;

      default:
        result = await request.get(url);
    }
    const { data, headers } = result;
    return { data, headers };
  } catch (error) {
    if (error.message === 'Network Error') {
      return {
        error: true,
        message: 'Unable to reach the server. Please check your network connection or try again later.',
      };
    }
    if (error.response) {
      const { data, headers } = error.response;
      return { data, headers };
    }
    return {
      error: true,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
