let backendHost;
const hostname = window && window.location && window.location.hostname;
console.log(hostname);

if(hostname === "https://whos-init.herokuapp.com/") {
  backendHost = "https://afternoon-sands-93107.herokuapp.com";
} else {
  backendHost = "http://localhost:4567";
}

export const API_ROOT = backendHost;
