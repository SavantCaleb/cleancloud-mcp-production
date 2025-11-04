// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetBusinessAccounts extends APIResource {
  /**
   * Retrieve information about business accounts
   */
  retrieve(
    body: GetBusinessAccountRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetBusinessAccountRetrieveResponse> {
    return this._client.post('/api/getBusinessAccounts', { body, ...options });
  }
}

export interface GetBusinessAccountRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetBusinessAccountRetrieveResponse.Data>;
}

export namespace GetBusinessAccountRetrieveResponse {
  export interface Data {
    /**
     * Business account ID
     */
    id?: string;

    /**
     * Contact person name
     */
    contactName?: string;

    /**
     * Business email
     */
    email?: string;

    /**
     * Business name
     */
    name?: string;

    /**
     * Business phone
     */
    phone?: string;
  }
}

export interface GetBusinessAccountRetrieveParams {
  api_token: string;
}

export declare namespace GetBusinessAccounts {
  export {
    type GetBusinessAccountRetrieveResponse as GetBusinessAccountRetrieveResponse,
    type GetBusinessAccountRetrieveParams as GetBusinessAccountRetrieveParams,
  };
}
