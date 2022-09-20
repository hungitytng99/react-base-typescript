import { Configs, REQUEST_STATE } from 'app-configs';
import { TOKEN_KEY } from 'app-configs';
import axios from 'axios';

// Declare types
type ExtraOptions = {
  isFullPath?: boolean;
  onUploadProgress?: Function;
};

export type ResponseTemplate<T> = {
  state: REQUEST_STATE;
  data?: T | null;
  error?: any,
};

// Funtions
export const getOptions = (options: Object) => {
  const opts = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
    data: {},
    onUploadProgress: () => {},
    ...options,
  };

  const token: string | null = localStorage.getItem(TOKEN_KEY);
  if (token) {
    opts.headers['Authorization'] = 'Bearer ' + token;
  }

  return opts;
};

export async function GET<T>(
  path: string,
  params: Object,
  extraOptions: ExtraOptions,
) {
  const _params = params
    ? Object.keys(params)
        .map(key => {
          let valueParam = params[key];
          let adjustParam = '';
          if (Array.isArray(valueParam)) {
            // TODO with "all" value;
            adjustParam = valueParam
              .map(
                paramDetail =>
                  `${key}=${encodeURIComponent(
                    paramDetail != 'all' ? paramDetail : '',
                  )}`,
              )
              .join('&');
          } else {
            // TODO with "all" value;
            valueParam = valueParam != 'all' ? valueParam : '';
            adjustParam = `${key}=${encodeURIComponent(valueParam)}`;
          }
          return adjustParam;
        })
        .join('&')
    : '';

  const _url =
    (extraOptions.isFullPath ? path : Configs.BASE_API + path) +
    (_params === '' ? '' : '?' + _params);

  const _options = getOptions(extraOptions);

  return axios.get<T>(_url, _options).then(response => response.data);
}

export async function POST<T>(
  path: string,
  params: Object,
  options: ExtraOptions,
) {
  const _url = options.isFullPath ? path : Configs.BASE_API + path;
  const _options = getOptions(options);

  return axios.post<T>(_url, params, _options).then(response => response.data);
}

export async function PUT<T>(
  path: string,
  params: Object,
  options: ExtraOptions,
) {
  const _url = options.isFullPath ? path : Configs.BASE_API + path;
  const _options = getOptions(options);
  return axios.put<T>(_url, params, _options).then(response => response.data);
}

export async function DELETE<T>(
  path: string,
  params: Object,
  options: ExtraOptions,
) {
  const _url = options.isFullPath ? path : Configs.BASE_API + path;
  const _options = getOptions(options);

  // delete with params;
  if (params) {
    _options.data = params;
  }

  return axios.delete<T>(_url, _options).then(response => response.data);
}

export async function UPLOAD<T>(
  path: string,
  files: Blob,
  options: ExtraOptions,
  onProgress = () => {},
) {
  const _url = options.isFullPath ? path : Configs.BASE_API + path;

  const _form = new FormData();
  _form.append('type', files.type);
  _form.append('files', files);

  const _options = getOptions(options);
  _options.headers['Content-Type'] = 'multipart/form-data';
  _options.onUploadProgress = onProgress;

  return axios.post<T>(_url, _form, _options).then(response => response.data);
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);
