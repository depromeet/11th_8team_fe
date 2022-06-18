import { QueryFunctionContext } from 'react-query';

import { IRecord } from './record';
import { IBasePaginationResponse } from '..';

import axios from '@/configs/axios';

export interface IGetMyRecordsResponseData extends IBasePaginationResponse<IRecord[]> {}

export const getMyRecords = async (context?: QueryFunctionContext) => {
  const { pageParam } = context || {};
  const res = await axios.get<IGetMyRecordsResponseData>(
    `/api/v1/records/tickets/${pageParam || ''}`,
  );
  return res.data;
};
