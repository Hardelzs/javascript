import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000, 
  duration: '20s',
};

export default function () {
  http.get('https://keyrush-kappa.vercel.app/');
  sleep(1);
}
