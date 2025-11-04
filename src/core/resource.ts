// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Cleancloud } from '../client';

export abstract class APIResource {
  protected _client: Cleancloud;

  constructor(client: Cleancloud) {
    this._client = client;
  }
}
