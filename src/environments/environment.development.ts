export const environment = {
  production: false,
  BACKEND_API: "http://localhost:8080/api/v1/",
  EXCLUDED_URLS: ["./assets/", "/i18n", "https://graph.microsoft"],
  // Microsoft authenthication sh%t
  MSAL: {
    CLIENT_ID: "f47c2497-b481-4902-b1e3-79ab38447a1a",
    AUTHORITY:
      "https://login.microsoftonline.com/598be909-3497-4762-a128-e8e82e732db1",
    REDIRECT_URI: "https://grzegorz-kolaty.github.io/performance-manager/dashboard",
    POST_LOGOUT_URI: "https://grzegorz-kolaty.github.io/performance-manager/home",
    SCOPES_ARRAY: [
      "user.read",
      "presence.read.all",
      "openid",
      "profile",
      "offline_access",
    ],
  },
};
