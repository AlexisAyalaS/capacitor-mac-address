import { registerPlugin } from '@capacitor/core';

import type { MacAddressPluginPlugin } from './definitions';

const MacAddressPlugin = registerPlugin<MacAddressPluginPlugin>(
  'MacAddressPlugin',
  {
    web: () => import('./web').then(m => new m.MacAddressPluginWeb()),
  },
);

export * from './definitions';
export { MacAddressPlugin };
