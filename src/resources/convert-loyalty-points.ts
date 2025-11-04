// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ConvertLoyaltyPoints extends APIResource {
  /**
   * Convert loyalty points to credit
   */
  convert(
    body: ConvertLoyaltyPointConvertParams,
    options?: RequestOptions,
  ): APIPromise<ConvertLoyaltyPointConvertResponse> {
    return this._client.post('/api/convertLoyaltyPoints', { body, ...options });
  }
}

export interface ConvertLoyaltyPointConvertResponse extends UpdateCustomerAPI.APIResponse {
  data?: ConvertLoyaltyPointConvertResponse.Data;
}

export namespace ConvertLoyaltyPointConvertResponse {
  export interface Data {
    /**
     * Credit gained
     */
    creditGained?: number;

    /**
     * Points converted
     */
    pointsConverted?: number;

    /**
     * Total credit after conversion
     */
    totalCredit?: number;
  }
}

export interface ConvertLoyaltyPointConvertParams {
  api_token: string;

  customerID: string;
}

export declare namespace ConvertLoyaltyPoints {
  export {
    type ConvertLoyaltyPointConvertResponse as ConvertLoyaltyPointConvertResponse,
    type ConvertLoyaltyPointConvertParams as ConvertLoyaltyPointConvertParams,
  };
}
