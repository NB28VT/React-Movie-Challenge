let backendHost;
const hostname = window && window.location && window.location.hostname;

if(hostname === "whos-init.herokuapp.com") {
  backendHost = "https://afternoon-sands-93107.herokuapp.com";
} else {
  backendHost = "http://localhost:4567";
}

export const apiRoot = backendHost;
