import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c25114814f5d5cf4e7a656edb95b25bee6dc11773993e6ff6c00ab37e419a0ed"
  }
});
