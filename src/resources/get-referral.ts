// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetReferral extends APIResource {
  /**
   * Get referral code and gift information for a customer
   */
  create(body: GetReferralCreateParams, options?: RequestOptions): APIPromise<GetReferralCreateResponse> {
    return this._client.post('/api/getReferral', { body, ...options });
  }
}

export interface GetReferralCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: GetReferralCreateResponse.Data;
}

export namespace GetReferralCreateResponse {
  export interface Data {
    /**
     * Gift description
     */
    gift?: string;

    /**
     * Gift amount
     */
    giftAmount?: number;

    /**
     * Unique referral code
     */
    referralCode?: string;
  }
}

export interface GetReferralCreateParams {
  api_token: string;

  customerID: string;
}

export declare namespace GetReferral {
  export {
    type GetReferralCreateResponse as GetReferralCreateResponse,
    type GetReferralCreateParams as GetReferralCreateParams,
  };
}
