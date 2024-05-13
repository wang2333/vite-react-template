import { useQuery as uesReactQuery } from '@tanstack/react-query';

import apiClient from '@/apis/apiClient';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
const fnMap = {
  GET: apiClient.get,
  POST: apiClient.post,
  PUT: apiClient.put,
  DELETE: apiClient.delete,
};
type Params = {
  [key: string]: any;
};

export const useQuery = <T>(type: Method, url: string, params?: Params) => {
  const query = uesReactQuery<T>({
    queryKey: [type, url, params],
    enabled: !!params,
  });

  return { ...query };
};
