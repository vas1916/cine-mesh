export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/384d70af-0a67-470f-a87d-8cd53438e26f/US-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/79135278?v=4";
export const DEFAULT_USER_AVATAR =
  "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
  },
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en-US", name: "English" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "kannada-IND", name: "Kannada" },
  { identifier: "telugu-IND", name: "Telugu" },
  { identifier: "tamil-IND", name: "Tamil" },
];
