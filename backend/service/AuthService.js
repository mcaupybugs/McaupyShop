import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client();

const getUserLoginCredentials = async (responseBody) => {
  const { credential, client_id } = responseBody.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: client_id,
    });
    const payload = ticket.getPayload();
    return payload;
  } catch (err) {
    throw err;
  }
};

export { getUserLoginCredentials };
