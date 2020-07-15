import axios from "axios";

export async function fetchData(link) {
  console.log("works");
  console.log(link);
  let data = await axios.get(link);

  const results = data.data.results;
  console.log("results", results);

  return results;
}
