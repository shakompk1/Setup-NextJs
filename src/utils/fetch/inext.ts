import { HTTPTypes } from 'utils/constants/enums'
import { Method } from 'utils/constants/types'

export const httpFetches = {
  [HTTPTypes.get]: (query: string, body: Body): Promise<any> => httpFetcher('GET', query, body),
  [HTTPTypes.post]: (query: string, body: Body): Promise<any> => httpFetcher('POST', query, body),
  [HTTPTypes.delete]: (query: string, body: Body): Promise<any> =>
    httpFetcher('DELETE', query, body),
  [HTTPTypes.put]: (query: string, body: Body): Promise<any> => httpFetcher('PUT', query, body),
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const httpFetcher = (method: Method, url: string, body: FormData | any): Promise<any> => {
  return
}
