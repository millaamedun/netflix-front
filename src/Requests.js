
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=9d3d1c2f3990d746d8b0a92004fe2231&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=9d3d1c2f3990d746d8b0a92004fe2231&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=9d3d1c2f3990d746d8b0a92004fe2231&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=9d3d1c2f3990d746d8b0a92004fe2231&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=9d3d1c2f3990d746d8b0a92004fe2231&language=en-US&page=1`,
  };

  export default requests
