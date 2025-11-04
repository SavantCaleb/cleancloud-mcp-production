// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SummaryReport extends APIResource {
  /**
   * Get summary metrics by day
   */
  create(body: SummaryReportCreateParams, options?: RequestOptions): APIPromise<SummaryReportCreateResponse> {
    return this._client.post('/api/summaryReport', { body, ...options });
  }
}

export interface SummaryReportCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<SummaryReportCreateResponse.Data>;
}

export namespace SummaryReportCreateResponse {
  export interface Data {
    /**
     * Date of summary
     */
    date?: string;

    /**
     * Number of new customers
     */
    newCustomers?: number;

    /**
     * Number of orders completed
     */
    ordersCompleted?: number;

    /**
     * Number of orders created
     */
    ordersCreated?: number;

    /**
     * Total revenue
     */
    revenue?: number;
  }
}

export interface SummaryReportCreateParams {
  api_token: string;

  dateFrom: string;

  dateTo: string;
}

export declare namespace SummaryReport {
  export {
    type SummaryReportCreateResponse as SummaryReportCreateResponse,
    type SummaryReportCreateParams as SummaryReportCreateParams,
  };
}
