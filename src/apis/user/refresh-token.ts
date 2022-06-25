import axios from 'axios';

import { IBaseResponse } from '..';

/**
 * refreshToken으로 accessToken 갱신
 */
export const renewalAccessToken = async () => {
  try {
    const res = await axios.get<IBaseResponse<object>>('/api/v1/token/refresh');
    return res.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};