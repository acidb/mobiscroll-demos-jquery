export interface IModule {
  init(inst: any): void;
}
export interface MbscPrintConfig {
  baseUrl?: string;
}
export declare const print: IModule;
