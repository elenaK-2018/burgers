export const getData = async (url) => {                                          //запрос к серверу
  const response = await fetch(url);

  if (response.ok) {
    return response.json()
  }
}