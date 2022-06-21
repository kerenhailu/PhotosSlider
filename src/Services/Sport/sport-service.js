const basic_url =
  "https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6/&category=sports";

export const GetAllSport = async () => {
  return await fetch(`${basic_url}`)
    .then((res) => res.json())
    .catch((error) => console.log({ error: "the method get isnt work" }));
};

// const basic_url =
//   "https://pixabay.com/api/?key=14910698-da2d9192ee156a4fb851cc1c6/&category=music";

// export const GetAllMusic = async () => {
//   return await fetch(`${basic_url}`)
//     .then((res) => res.json())
//     .catch((error) => console.log({ error: "the method get isnt work" }));
// };