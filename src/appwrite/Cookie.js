import { account } from '@appwrite/sdk';

// Set a cookie with the session ID
account.get().then((response) => {
  const sessionId = response.sessionId;
  const expires = 30; // expires in 30 days
  const cookieStr = `sessionId=${sessionId}; expires=${expires}; path=/`;
  document.cookie = cookieStr;
});

// On page reload, send the session ID to Appwrite
window.addEventListener('load', () => {
  const cookie = getCookie('sessionId');
  if (cookie) {
    const sessionId = cookie;
    // Send the session ID to Appwrite
    fetch(`${AppwriteEndpoint}/account/sessions/email`, {
      method: 'POST',
      headers: {
        'x-appwrite-project': AppwriteProject,
        'Cookie': `sessionId=${sessionId}`
      }
    });
  }
});

// Get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}