// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetRoute extends APIResource {
  /**
   * Get route number from latitude/longitude or address
   */
  create(body: GetRouteCreateParams, options?: RequestOptions): APIPromise<GetRouteCreateResponse> {
    return this._client.post('/api/getRoute', { body, ...options });
  }
}

export interface GetRouteCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: GetRouteCreateResponse.Data;
}

export namespace GetRouteCreateResponse {
  export interface Data {
    /**
     * Route ID
     */
    routeID?: string;

    /**
     * Route name
     */
    routeName?: string;

    /**
     * Route number
     */
    routeNumber?: string;
  }
}

export interface GetRouteCreateParams {
  api_token: string;

  /**
   * Address if lat/lng not known
   */
  customerAddress?: string;

  lat?: number;

  lng?: number;

  /**
   * Check if lat/lng is in this route
   */
  routeID?: string;
}

export declare namespace GetRoute {
  export {
    type GetRouteCreateResponse as GetRouteCreateResponse,
    type GetRouteCreateParams as GetRouteCreateParams,
  };
}
