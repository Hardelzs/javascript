// using 3 users test level
// testing gradually

import http from "k6/http"
import  {sleep} from "k6"


export  let options = {
    stages: [
        { duration: '10s', target: 10 }, // light mode
        { duration: '10s', target: 100 }, // moderate mode
        { duration: '10s', target: 1000 }, // heavy mode
        { duration: '10s', target: 10000 }, //load mode
        { duration: '10s', target: 0} // ramp mode
    ]
}


export  default function () {
    http.get('https://keyrush-kappa.vercel.app/')
    http.get('https://keyrush-kappa.vercel.app/')
    http.get('https://keyrush-kappa.vercel.app/')
    http.get('https://keyrush-kappa.vercel.app/')
    sleep(1)
}


