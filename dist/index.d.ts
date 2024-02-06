import { Plugin } from 'grapesjs';

export type PluginOptions = {
	[key: string]: any;
};
declare const CalendarPlugin: Plugin<PluginOptions>;

export {
	CalendarPlugin as default,
};

export {};
