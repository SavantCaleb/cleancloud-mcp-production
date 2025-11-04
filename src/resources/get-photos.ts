// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetPhotos extends APIResource {
  /**
   * Get photos associated with an order
   */
  create(body: GetPhotoCreateParams, options?: RequestOptions): APIPromise<GetPhotoCreateResponse> {
    return this._client.post('/api/getPhotos', { body, ...options });
  }
}

export interface GetPhotoCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetPhotoCreateResponse.Data>;
}

export namespace GetPhotoCreateResponse {
  export interface Data {
    /**
     * Photo ID
     */
    id?: string;

    /**
     * Unix timestamp
     */
    timestamp?: number;

    /**
     * Photo type (pickup, delivery, etc.)
     */
    type?: string;

    /**
     * Photo URL
     */
    url?: string;
  }
}

export interface GetPhotoCreateParams {
  api_token: string;

  customerID: string;

  orderID: string;
}

export declare namespace GetPhotos {
  export {
    type GetPhotoCreateResponse as GetPhotoCreateResponse,
    type GetPhotoCreateParams as GetPhotoCreateParams,
  };
}
