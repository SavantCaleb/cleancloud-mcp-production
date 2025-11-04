// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetCards extends APIResource {
  /**
   * Fetch all saved cards for a customer
   */
  fetchAll(body: GetCardFetchAllParams, options?: RequestOptions): APIPromise<GetCardFetchAllResponse> {
    return this._client.post('/api/getCards', { body, ...options });
  }
}

export interface GetCardFetchAllResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetCardFetchAllResponse.Data>;
}

export namespace GetCardFetchAllResponse {
  export interface Data {
    /**
     * Card ID
     */
    id?: string;

    /**
     * Card brand
     */
    brand?: string;

    /**
     * Whether this is the default card
     */
    isDefault?: boolean;

    /**
     * Last 4 digits of card
     */
    last4?: string;
  }
}

export interface GetCardFetchAllParams {
  api_token: string;

  customerID: string;

  /**
   * 3=Clearent, 5=CleanCloud Pay, 6=Amazon
   */
  type: 3 | 5 | 6;
}

export declare namespace GetCards {
  export {
    type GetCardFetchAllResponse as GetCardFetchAllResponse,
    type GetCardFetchAllParams as GetCardFetchAllParams,
  };
}
