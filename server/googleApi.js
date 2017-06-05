var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  '274579398193-ubd3se3utel5qata84lfosobn380i4mc.apps.googleusercontent.com',
  'fVHTZLeBANFkBtFRNVetZ8DB'
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
});
