export const getRequest = async (uri) => {
  const response = await fetch(uri);

  const data = await response.json();

  return data;
};

export const postRequest = async (uri, body) => {
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
};
