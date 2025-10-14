import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '242706142939-fkf3nc7lkb0ijrvppl1v2c8rjnri59me.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
