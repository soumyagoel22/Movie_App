import axios from "axios";

const fetchData = ({ search, setSearchData }) => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=7669961a0c44d24f555fb82a190e9a2e&query=${search}`;
  
  axios
    .get(url)
    .then((res) => {
      console.log(res.data.results);
      setSearchData(res.data.results);
    })
    .catch((err) => {
      console.log(err);
      setSearchData("Error");
    });
};

export default fetchData;
