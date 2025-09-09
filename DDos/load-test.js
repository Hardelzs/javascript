import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 100 },   // ramp up to 100 users
    { duration: "1m", target: 500 },    // push to 500 users
    { duration: "1m", target: 1000 },   // hold at 1000 users
    { duration: "2m", target: 2000 },   // stress up to 2000 users
    { duration: "30s", target: 0 },     // cool down
  ],
  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% of requests under 2s
    http_req_failed: ["rate<0.05"],    // <5% requests fail
  },
};

export default function () {
  http.get("157.173.209.142"); // 👈 replace with your site
  sleep(1);
}
