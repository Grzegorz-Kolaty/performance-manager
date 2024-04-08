export const environment = {
  production: true,
  BACKEND_API: "http://localhost:8080/api/v1/",
  EXCLUDED_URLS: ["./assets/", "/i18n", "https://graph.microsoft"],
  // Microsoft authenthication sh%t
  MSAL: {
    CLIENT_ID: "f47c2497-b481-4902-b1e3-79ab38447a1a",
    AUTHORITY:
      "https://login.microsoftonline.com/3f77443f-2656-4db6-8393-d4e43483d682/",
    REDIRECT_URI: "https://grzegorz-kolaty.github.io/performance-manager/dashboard",
    POST_LOGOUT_URI: "https://grzegorz-kolaty.github.io/performance-manager/home",
    SCOPES_ARRAY: [
      "GroupMember.Read.All",
      "People.Read",
      "user.read",
      "User.Read.All",
      "User.ReadBasic.All",
      "presence.read.all",
      "openid",
      "profile",
      "offline_access",
      "email",
    ],
  },
};
