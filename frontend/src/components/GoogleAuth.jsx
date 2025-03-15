import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { loginUser } from "../services/AuthService";

const GoogleAuth = ({ setUser }) => {
  const clientId =
    "214049362911-jcrv6srfm8kif3huugs32r41qrrl9mq3.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);
          var response = await loginUser(credentialResponse);
          console.log(response);
          if (response.name === undefined) {
            return;
          } else {
            window.sessionStorage.setItem(
              "current_user",
              JSON.stringify(response)
            );
            setUser(response);
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};
export default GoogleAuth;
