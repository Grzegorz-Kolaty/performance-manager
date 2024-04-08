export const environment = {
  production: true,
  BACKEND_API: "http://localhost:8080/api/v1/",
  EXCLUDED_URLS: ["./assets/", "/i18n", "https://graph.microsoft"],
  // Microsoft authenthication sh%t
  MSAL: {
    CLIENT_ID: "f47c2497-b481-4902-b1e3-79ab38447a1a",
    AUTHORITY:
      "https://login.microsoftonline.com/598be909-3497-4762-a128-e8e82e732db1",
    REDIRECT_URI: "http://localhost:4200/dashboard",
    POST_LOGOUT_URI: "http://localhost:4200/home",
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
