export const environment = {
  production: false,
  BACKEND_API: "http://localhost:8080/api/v1/",
  EXCLUDED_URLS: ["./assets/", "/i18n", "https://graph.microsoft"],
  // Microsoft authenthication sh%t
  MSAL: {
    CLIENT_ID: "2b1bccbe-65ef-47f2-adad-f22a38663eed",
    AUTHORITY:
      "https://login.microsoftonline.com/1d519519-709e-43d9-927b-5c6bcdc52896",
    REDIRECT_URI: "/performance-manager/dashboard",
    POST_LOGOUT_URI: "/",
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
