import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 100 },
    { duration: "30s", target: 500 },
    { duration: "30s", target: 1000 },
    { duration: "30s", target: 2000 },
    { duration: "30s", target: 3000 },
    { duration: "30s", target: 4000 },
    { duration: "30s", target: 5000 },
    { duration: "30s", target: 6000 },
    { duration: "30s", target: 7000 },
    { duration: "30s", target: 8000 },
    { duration: "30s", target: 10000 }, 
    { duration: "30s", target: 1000 }, 
    { duration: "30s", target: 1000 }, 
    { duration: "30s", target: 1000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    { duration: "30s", target: 9000 }, 
    // 🚀 keep adding more if needed
  ],
};

export default function () {
  http.get("157.173.209.142"); // 👈 replace with your site
  sleep(1);
}
