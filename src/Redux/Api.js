import { useQuery } from "react-query";

const head_link = "https://api.themoviedb.org/3";
const key = "542160c3792c7bccea78ba58cf55157a";

const ApiFetch = () => {
  const { isLoading, data } = useQuery("tmdb_api", () => {
    return axios.get(`${head_link}/genre/movie/list`, {
      params: {
        api_key: `${key}`,
      },
    });
  });

  if(isLoading) {
    return <h2>Loading...</h2>
  }
};

export default ApiFetch;
