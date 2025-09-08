import http from "k6/http"
import { sleep } from "k6"

export let options = {
  stages: [
    { duration: '10s', target: 3000 },   // Light load (3 users)
    { duration: '20s', target: 10000 },  // Moderate load (10 users)
    { duration: '30s', target: 5000 },  // Heavy load (50 users)
    { duration: '10s', target: 9000 },   // Ramp down (back to 0)
  ],
}

export default function () {
  http.get('https://mfgdisco.com/')
  http.get('https://ledstagelightmfg.com/')
  sleep(1)
}
