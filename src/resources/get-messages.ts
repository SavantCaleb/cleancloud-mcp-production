// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetMessages extends APIResource {
  /**
   * Get messaging history with a customer
   */
  retrieve(body: GetMessageRetrieveParams, options?: RequestOptions): APIPromise<GetMessageRetrieveResponse> {
    return this._client.post('/api/getMessages', { body, ...options });
  }
}

export interface GetMessageRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetMessageRetrieveResponse.Data>;
}

export namespace GetMessageRetrieveResponse {
  export interface Data {
    /**
     * Message ID
     */
    id?: string;

    /**
     * Customer ID
     */
    customerID?: string;

    /**
     * Message content
     */
    message?: string;

    /**
     * Unix timestamp
     */
    timestamp?: number;
  }
}

export interface GetMessageRetrieveParams {
  api_token: string;

  customerID: string;

  /**
   * Number of messages to return
   */
  limit?: number;
}

export declare namespace GetMessages {
  export {
    type GetMessageRetrieveResponse as GetMessageRetrieveResponse,
    type GetMessageRetrieveParams as GetMessageRetrieveParams,
  };
}
