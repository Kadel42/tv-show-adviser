import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { OPTIONS, URL_BASE, URL_POPULAR } from "../config.js";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${URL_BASE}${URL_POPULAR}`, OPTIONS);
    return response.data.results;
    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${URL_BASE}tv/${tvShowId}/recommendations?language=en-US&page=1`,
      OPTIONS
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${URL_BASE}search/tv?query=${title}&include_adult=false&language=en-US&page=1`,
      OPTIONS
    );
    return response.data.results;
  }
}
