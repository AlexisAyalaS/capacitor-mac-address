export interface MacAddressPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
