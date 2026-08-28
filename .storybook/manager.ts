import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'swamp',
    brandUrl: 'https://swampstudio.vercel.app/',
    brandImage: '/logo-icon.svg',
    brandTarget: '_self',

    colorPrimary: '#FCF47A',
    colorSecondary: '#281C10',

    appBg: '#F9F8F2',
    appContentBg: '#FFFFFF',
    appBorderColor: '#281C10',
    textColor: '#131410',

    barBg: '#F9F8F2',
    barTextColor: '#281C10',
    barSelectedColor: '#281C10',

    inputBg: '#FFFFFF',
    inputBorder: '#281C10',
    inputTextColor: '#131410',

    fontBase: '"Helvetica Now Display", Helvetica, Arial, sans-serif',
    fontCode: '"Geist Mono", monospace',
  }),
});
