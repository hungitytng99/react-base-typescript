import { REQUEST_STATE, USER_TYPE } from 'app-configs';
import { POST, ResponseTemplate } from 'app-data/fetch';
// apiLogin
export type LoginBody = {
  email: string;
  password: string;
  type: USER_TYPE;
};

export type LoginResponse = {
  accessToken: string;
};

export async function apiLogin(params: LoginBody): Promise<ResponseTemplate<LoginResponse>> {
  try {
    const response = await POST<LoginResponse>('/auth', params, { isFullPath: false });
    return {
      state: REQUEST_STATE.SUCCESS,
      data: response,
    };
  } catch (error) {
    console.log('=> Error at apiLogin function: .', error);
    return {
      error: error,
      state: REQUEST_STATE.ERROR,
      data: {},
    };
  }
}
