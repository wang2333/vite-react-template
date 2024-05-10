import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWind,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
  UserConfig,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { builtinColors, presetShadcn } from 'unocss-preset-shadcn'

const config: UserConfig = {
  presets: [
    presetUno(),
    presetWind(),
    presetIcons(),
    presetAnimations(),
    presetAttributify(),
    // presetShadcn({
    //   color: {
    //     base: 'yellow',
    //     color: {
    //       name: 'pink',
    //       light: {
    //         background: '0 0% 100%',
    //         foreground: '240 10% 3.9%',
    //         card: '0 0% 100%',
    //         'card-foreground': '240 10% 3.9%',
    //         popover: '0 0% 100%',
    //         'popover-foreground': '240 10% 3.9%',
    //         primary: '346.8 77.2% 49.8%',
    //         'primary-foreground': '355.7 100% 97.3%',
    //         secondary: '240 4.8% 95.9%',
    //         'secondary-foreground': '240 5.9% 10%',
    //         muted: '240 4.8% 95.9%',
    //         'muted-foreground': '240 3.8% 46.1%',
    //         accent: '240 4.8% 95.9%',
    //         'accent-foreground': '240 5.9% 10%',
    //         destructive: '0 84.2% 60.2%',
    //         'destructive-foreground': '0 0% 98%',
    //         border: '240 5.9% 90%',
    //         input: '240 5.9% 90%',
    //         ring: '346.8 77.2% 49.8%',
    //       },
    //     },
    //   },
    // }),
    presetShadcn(builtinColors.map((c) => ({ color: c }))),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerAttributifyJsx()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'i-flex-center': 'inline-flex justify-center items-center',
    'i-flex-x-center': 'inline-flex justify-center',
    'i-flex-y-center': 'inline-flex items-center',
    'flex-col': 'flex flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'i-flex-col': 'inline-flex flex-col',
    'i-flex-col-stretch': 'i-flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',
    'absolute-center': 'absolute-lt flex-center wh-full',
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
    'fixed-center': 'fixed-lt flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden text-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out',
  },
  rules: [],
  theme: {
    colors: {},
  },
  safelist: ['animate-fade-in', '!animate-duration-360'],
}

export default defineConfig(config)
