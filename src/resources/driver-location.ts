// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DriverLocation extends APIResource {
  /**
   * Get most recent location of driver for an order
   */
  getRecentLocation(
    body: DriverLocationGetRecentLocationParams,
    options?: RequestOptions,
  ): APIPromise<DriverLocationGetRecentLocationResponse> {
    return this._client.post('/api/driverLocation', { body, ...options });
  }
}

export interface DriverLocationGetRecentLocationResponse extends UpdateCustomerAPI.APIResponse {
  data?: DriverLocationGetRecentLocationResponse.Data;
}

export namespace DriverLocationGetRecentLocationResponse {
  export interface Data {
    /**
     * Estimated arrival time
     */
    estimatedArrival?: string;

    /**
     * Driver latitude
     */
    lat?: number;

    /**
     * Driver longitude
     */
    lng?: number;

    /**
     * Unix timestamp of location
     */
    timestamp?: number;
  }
}

export interface DriverLocationGetRecentLocationParams {
  api_token: string;

  customerID: string;

  orderID: string;
}

export declare namespace DriverLocation {
  export {
    type DriverLocationGetRecentLocationResponse as DriverLocationGetRecentLocationResponse,
    type DriverLocationGetRecentLocationParams as DriverLocationGetRecentLocationParams,
  };
}
