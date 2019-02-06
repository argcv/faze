// this file is a wrapper to use REST API easier
// examples: https://github.com/axios/axios/tree/master/examples
import axios from "axios";

import { api } from 'config.js';

class Rest {
  constructor() {
    this.api_base = `${api.host}${api.path}`;
  }

  async get(url, params = {}) {
    let api_base = this.api_base;
    let newUrl = `${api_base}${url}`;
    console.log("components/request/rest.jsx: base: %o, new url: %o, params: %o ", api_base, newUrl, params);

    let options = {}

    if (params) {
      options.params = params
    }

    try {
      let ret = await axios.get(newUrl, options)
      return ret;

      // if we need to request a sequence data:
      // const ret1p = axios.get(newUrl1);
      // const ret2p = axios.get(newUrl2);
      // const ret3p = axios.get(newUrl3);
      // const [ret1, ret2, ret3] = await Promise.all([ret1p, ret2p, ret3p]);
    } catch (e) {
      console.error(e);
      return { "status": false, "message": e };
    }
  }
}

let RestInstance = new Rest()

export default RestInstance;
