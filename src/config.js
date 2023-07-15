const URL_BASE = "https://api.themoviedb.org/3/";
const URL_POPULAR = "tv/popular?language=en-US&page=1";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTNiNmMyMGVmM2JiNzI5ODY3OGI5NThkOWZlMTQ3NyIsInN1YiI6IjY0YWVkMTAyY2RkYmJjMDEzZjIwYzdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHE1zE87lPxnI_ZBThDzr_iFhf5um9icgcHzpvzTlg0",
  },
};
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const SMALL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

export {
  URL_BASE,
  OPTIONS,
  BACKDROP_BASE_URL,
  SMALL_IMG_BASE_URL,
  URL_POPULAR,
};
