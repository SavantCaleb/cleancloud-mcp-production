// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UsePromo extends APIResource {
  /**
   * Use or validate a promo code
   */
  apply(body: UsePromoApplyParams, options?: RequestOptions): APIPromise<UsePromoApplyResponse> {
    return this._client.post('/api/usePromo', { body, ...options });
  }
}

export interface UsePromoApplyResponse extends UpdateCustomerAPI.APIResponse {
  data?: UsePromoApplyResponse.Data;
}

export namespace UsePromoApplyResponse {
  export interface Data {
    /**
     * Credit amount
     */
    creditAmount?: number;

    /**
     * Discount percentage
     */
    discountPercent?: number;

    /**
     * Whether promo code is valid
     */
    valid?: boolean;
  }
}

export interface UsePromoApplyParams {
  api_token: string;

  customerID: string;

  promoCode: string;

  /**
   * Only validate without using
   */
  onlyCheckIfValid?: 0 | 1;
}

export declare namespace UsePromo {
  export {
    type UsePromoApplyResponse as UsePromoApplyResponse,
    type UsePromoApplyParams as UsePromoApplyParams,
  };
}
