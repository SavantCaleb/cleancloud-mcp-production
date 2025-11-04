// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetDates extends APIResource {
  /**
   * Get available pickup and delivery dates with time slots
   */
  fetchAvailableDates(
    body: GetDateFetchAvailableDatesParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/getDates', { body, ...options });
  }
}

export interface GetDateFetchAvailableDatesParams {
  api_token: string;

  routeID: string;
}

export declare namespace GetDates {
  export { type GetDateFetchAvailableDatesParams as GetDateFetchAvailableDatesParams };
}
