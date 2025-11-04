// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddCustomer extends APIResource {
  /**
   * Creates a new customer account with the provided information
   */
  create(body: AddCustomerCreateParams, options?: RequestOptions): APIPromise<AddCustomerCreateResponse> {
    return this._client.post('/api/addCustomer', { body, ...options });
  }
}

export interface Customer {
  /**
   * Unique identifier for the customer
   */
  id?: string;

  /**
   * Day of birth
   */
  birthdayDay?: number;

  /**
   * Month of birth
   */
  birthdayMonth?: number;

  /**
   * 0 = None selected, 1 = Low, 2 = Regular
   */
  colorsDryerHeat?: 0 | 1 | 2;

  /**
   * 0 = None selected, 1 = Cold Wash, 2 = Warm Wash
   */
  colorsWashTemp?: 0 | 1 | 2;

  /**
   * Physical address of customer
   */
  customerAddress?: string;

  /**
   * Additional address instructions to help driver
   */
  customerAddressInstructions?: string;

  /**
   * Email address of customer
   */
  customerEmail?: string;

  /**
   * 0 = Not set, 1 = Male, 2 = Female, 3 = Prefer Not to Say
   */
  customerGender?: 0 | 1 | 2 | 3;

  /**
   * Latitude of customer address
   */
  customerLat?: number;

  /**
   * Longitude of customer address
   */
  customerLng?: number;

  /**
   * Name of the customer
   */
  customerName?: string;

  /**
   * Saved notes for customer account
   */
  customerNotes?: string;

  /**
   * Route number of customer
   */
  customerRoute?: string;

  /**
   * Telephone number of customer
   */
  customerTel?: string;

  /**
   * 0 = None selected, 1 = No scent, 2 = Light, 3 = Medium, 4 = Heavy, 5 = Sensitive
   * skin
   */
  detergentScent?: 0 | 1 | 2 | 3 | 4 | 5;

  /**
   * 0 = None selected, 1 = Standard, 2 = Premium
   */
  detergentType?: 0 | 1 | 2;

  /**
   * 0 = None selected, 1 = No Softener, 2 = Standard, 3 = Premium
   */
  fabricSoftenerType?: 0 | 1 | 2 | 3;

  /**
   * 1 = opt in, 0 = no permission given
   */
  marketingOptIn?: 0 | 1;

  /**
   * 0 = None selected, 1 = Hanger, 2 = Boxed, 3 = Folded
   */
  shirtPreference?: 0 | 1 | 2 | 3;

  /**
   * 0 = None selected, 1 = No starch, 2 = Normal, 3 = Light, 4 = Heavy
   */
  starchPreference?: 0 | 1 | 2 | 3 | 4;

  /**
   * 0 = None selected, 1 = Hanger, 2 = Boxed, 3 = Folded
   */
  trouserPreference?: 0 | 1 | 2 | 3;

  /**
   * 0 = None selected, 1 = Low, 2 = Regular
   */
  whitesDryerHeat?: 0 | 1 | 2;

  /**
   * 0 = None selected, 1 = Cold Wash, 2 = Warm Wash
   */
  whitesWashTemp?: 0 | 1 | 2;
}

export interface AddCustomerCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Customer;
}

export interface AddCustomerCreateParams {
  /**
   * Your secret API token
   */
  api_token: string;

  /**
   * Email of customer
   */
  customerEmail: string;

  /**
   * Name of customer
   */
  customerName: string;

  /**
   * Telephone number of customer
   */
  customerTel: string;

  birthdayDay?: number;

  birthdayMonth?: number;

  colorsDryerHeat?: 0 | 1 | 2;

  colorsWashTemp?: 0 | 1 | 2;

  /**
   * Address of customer
   */
  customerAddress?: string;

  /**
   * Additional address instructions
   */
  customerAddressInstructions?: string;

  /**
   * 0 = Not set, 1 = Male, 2 = Female, 3 = Prefer Not to Say
   */
  customerGender?: 0 | 1 | 2 | 3;

  /**
   * Latitude of customer address
   */
  customerLat?: number;

  /**
   * Longitude of customer address
   */
  customerLng?: number;

  /**
   * Saved notes for customer account
   */
  customerNotes?: string;

  /**
   * Password for customer account
   */
  customerPassword?: string;

  /**
   * Route number of customer
   */
  customerRoute?: string;

  detergentScent?: 0 | 1 | 2 | 3 | 4 | 5;

  detergentType?: 0 | 1 | 2;

  /**
   * EVO card token
   */
  evoToken?: string;

  fabricSoftenerType?: 0 | 1 | 2 | 3;

  /**
   * Assign to route based on address
   */
  findRoute?: 0 | 1;

  /**
   * Convert address to GPS coordinates
   */
  makeLatLng?: 0 | 1;

  marketingOptIn?: 0 | 1;

  /**
   * Set to 1 if email not required
   */
  noEmailRequired?: 0 | 1;

  /**
   * Promo code on signup
   */
  promoCode?: string;

  shirtPreference?: 0 | 1 | 2 | 3;

  starchPreference?: 0 | 1 | 2 | 3 | 4;

  /**
   * Stripe customer token
   */
  stripe?: string;

  trouserPreference?: 0 | 1 | 2 | 3;

  whitesDryerHeat?: 0 | 1 | 2;

  whitesWashTemp?: 0 | 1 | 2;
}

export declare namespace AddCustomer {
  export {
    type Customer as Customer,
    type AddCustomerCreateResponse as AddCustomerCreateResponse,
    type AddCustomerCreateParams as AddCustomerCreateParams,
  };
}
