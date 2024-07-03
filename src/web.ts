import { WebPlugin } from '@capacitor/core';

import type { MacAddressPluginPlugin } from './definitions';

export class MacAddressPluginWeb
  extends WebPlugin
  implements MacAddressPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
