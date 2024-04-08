export const environment = {
  production: true,
  BACKEND_API: "http://localhost:8080/api/v1/",
  EXCLUDED_URLS: ["./assets/", "/i18n", "https://graph.microsoft"],
  // Microsoft authenthication sh%t
  MSAL: {
    CLIENT_ID: "dc1aea2d-2982-4e88-8756-9cbc93936d3b",
    AUTHORITY:
      "https://login.microsoftonline.com/common/",
    REDIRECT_URI: "/",
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
