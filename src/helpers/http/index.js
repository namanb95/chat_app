export default class HttpAdaptor {
  _headers;
  _payload;
  _method;
  _path;
  _baseUrl;

  url;
  requestMeta = {
    method: "",
    headers: {},
    body: ""
  };

  constructor(method, path, baseUrl, callHeaders = null, payload = null) {
    this._method = method;
    this._path = path;
    this._headers = callHeaders;
    this._payload = payload;
    this._baseUrl = baseUrl;

    this.requestMeta.method = this._method;
  }

  setHeaders() {
    if (this._headers) {
      let tmp = {};
      for (let head in this._headers) {
        tmp[head] = this._headers[head];
      }
      this.requestMeta.headers = new Headers(tmp);
    } else delete this.requestMeta.headers;

    return this;
  }

  setPayload() {
    if (this._payload) {
      this.requestMeta.body = JSON.stringify(this._payload);
    } else delete this.requestMeta.body;

    return this;
  }

  setPath() {
    this.url = `${this._baseUrl}${this._path}`;
    return this;
  }

  makeCall() {
    return fetch(this.url, this.requestMeta).then(res => res.json());
  }
}
