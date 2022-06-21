const basic_url =
  "https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6";

export const GetAllPhotos = async () => {
  return await fetch(`${basic_url}`)
    .then((res) => res.json())
    .catch((error) => console.log({ error: "the method get isnt work" }));
};
