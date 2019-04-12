class API_Store {
  static LOGIN = "/auth/login";
  static SIGNUP = "/auth/signup";
  static SEARCH_USER = "/user/searchUser";
  static VERIFY_TOKEN = token => `/auth/decodeToken/${token}`;
}

export default API_Store;
