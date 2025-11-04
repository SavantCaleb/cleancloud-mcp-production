// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteOrder extends APIResource {
  /**
   * Delete an existing order
   */
  delete(body: DeleteOrderDeleteParams, options?: RequestOptions): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/deleteOrder', { body, ...options });
  }
}

export interface DeleteOrderDeleteParams {
  api_token: string;

  orderID: string;

  /**
   * Check if order is too close to pickup time
   */
  checkPickupTime?: 0 | 1;

  /**
   * Send email notification
   */
  sendEmail?: 0 | 1;
}

export declare namespace DeleteOrder {
  export { type DeleteOrderDeleteParams as DeleteOrderDeleteParams };
}
