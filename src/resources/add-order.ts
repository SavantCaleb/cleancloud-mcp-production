// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddOrder extends APIResource {
  /**
   * Create a new order for a customer
   */
  create(body: AddOrderCreateParams, options?: RequestOptions): APIPromise<AddOrderCreateResponse> {
    return this._client.post('/api/addOrder', { body, ...options });
  }
}

export interface Order {
  /**
   * Unique identifier for the order
   */
  id?: string;

  /**
   * Amount of credit used with this order
   */
  creditUsed?: number;

  /**
   * ID of the customer
   */
  customerID?: string;

  /**
   * 1 = Order will also be a delivery, 0 = no delivery
   */
  delivery?: 0 | 1;

  /**
   * Unix timestamp of delivery date
   */
  deliveryDate?: number;

  /**
   * End time for delivery
   */
  deliveryEnd?: string;

  /**
   * Amount charged for delivery
   */
  deliveryFee?: number;

  /**
   * Start time for delivery
   */
  deliveryStart?: string;

  /**
   * Discount amount applied to order
   */
  discount?: number;

  /**
   * Discount percentage
   */
  discountPercent?: number;

  /**
   * 0 = Normal, 1 = Express
   */
  express?: 0 | 1;

  /**
   * Final total value of the order
   */
  finalTotal?: number;

  /**
   * ID of locker location
   */
  lockerLocationID?: string;

  /**
   * Locker number
   */
  lockerNumber?: string;

  /**
   * 1 = Order dropped in a locker
   */
  lockerOrder?: 0 | 1;

  /**
   * Amount applied to raise order to minimum required subtotal
   */
  minimumAdjust?: number;

  /**
   * 1 = SMS, 2 = EMAIL, 3 = DO NOT NOTIFY, 4 = EMAIL & SMS
   */
  notifyMethod?: 1 | 2 | 3 | 4;

  /**
   * Notes for the order
   */
  orderNotes?: string;

  /**
   * 1 = Paid, 0 = Unpaid
   */
  paid?: 0 | 1;

  /**
   * 0 = No payment type, 1 = Cash, 2 = Card, 3 = Check
   */
  paymentType?: 0 | 1 | 2 | 3;

  /**
   * Unix timestamp of pickup date
   */
  pickupDate?: number;

  /**
   * End time for pickup (e.g. 11am)
   */
  pickupEnd?: string;

  /**
   * Start time for pickup (e.g. 10am)
   */
  pickupStart?: string;

  /**
   * ID of the price list used
   */
  priceListID?: string;

  products?: Array<Product>;

  /**
   * 0 = Cleaning, 1 = Ready, 2 = Completed, 3 = Pickup Requiring Confirmation, 4 =
   * Accepted Pickup, 5 = Detailing
   */
  status?: 0 | 1 | 2 | 3 | 4 | 5;

  /**
   * Unix timestamp of store drop off date
   */
  storeDropOffDate?: number;

  /**
   * 1 = Regular store order
   */
  storeOrder?: 0 | 1;

  /**
   * Unix timestamp of when order will be ready
   */
  storeReadyByDate?: number;

  /**
   * Time when order will be ready
   */
  storeReadyByTime?: string;

  /**
   * Tax amount applied to the order
   */
  tax?: number;

  /**
   * Second tax amount
   */
  tax2?: number;

  /**
   * Third tax amount
   */
  tax3?: number;

  /**
   * Tip amount
   */
  tip?: number;

  /**
   * Tip percentage
   */
  tipPercent?: number;
}

export interface Product {
  /**
   * Product ID
   */
  id?: string;

  /**
   * Product name
   */
  name?: string;

  /**
   * Number of pieces
   */
  pieces?: number;

  /**
   * Product price
   */
  price?: number;

  /**
   * Quantity
   */
  quantity?: number;
}

export interface AddOrderCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Order;
}

export interface AddOrderCreateParams {
  api_token: string;

  customerID: string;

  finalTotal: number;

  creditUsed?: number;

  delivery?: 0 | 1;

  deliveryDate?: number;

  deliveryEnd?: string;

  deliveryFee?: number;

  deliveryStart?: string;

  discount?: number;

  discountPercent?: number;

  express?: 0 | 1;

  lockerLocationID?: string;

  lockerNumber?: string;

  lockerOrder?: 0 | 1;

  minimumAdjust?: number;

  notifyMethod?: 1 | 2 | 3 | 4;

  orderNotes?: string;

  paid?: 0 | 1;

  paymentType?: 0 | 1 | 2 | 3;

  pickupDate?: number;

  pickupEnd?: string;

  pickupStart?: string;

  priceListID?: string;

  products?: Array<Product>;

  sendEmail?: 0 | 1;

  staffVerify?: 0 | 1;

  status?: 0 | 1 | 2 | 3 | 4 | 5;

  storeDropOffDate?: number;

  storeOrder?: 0 | 1;

  storeReadyByDate?: number;

  storeReadyByTime?: string;

  tax?: number;

  tax2?: number;

  tax3?: number;

  tip?: number;

  tipPercent?: number;
}

export declare namespace AddOrder {
  export {
    type Order as Order,
    type Product as Product,
    type AddOrderCreateResponse as AddOrderCreateResponse,
    type AddOrderCreateParams as AddOrderCreateParams,
  };
}
