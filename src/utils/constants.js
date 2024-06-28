export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR= "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BACKGROUND_URL= "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg" ;


export const SUPPORTED_LANGUAGES= [
  {ideantifier:"english", name:"English"},
  {ideantifier:"hindi", name:"Hindi"},
  {ideantifier:"spanish", name:"Spanish"},
]

export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY;