import { defineConfig } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

import { presetUno, presetIcons, presetTypography } from 'unocss';

const colorShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

export default defineConfig({
    extractors: [
        extractorSvelte(),
    ],
    theme: {
        duration: {
            //DEFAULT: '2s'
        },
        breakpoints: {
            '5xs': '240px',
            '4xs': '320px',
            '3xs': '380px',
            '2xs': '460px',
            'xs': '540px',
            'sm': '640px',
            'smd': '704px',
            'md': '768px',
            'mdl': '896px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1800px',
        },
        boxShadow: {
            'around-sm': '0 0 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1))',
            'around': '0 0 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)), 0 0 2px 1px var(--un-shadow-color, rgb(0 0 0 / 0.1))',
            'around-md': '0 0 5px 1px var(--un-shadow-color, rgb(0 0 0 / 0.1)), 0 0 4px 2px var(--un-shadow-color, rgb(0 0 0 / 0.1))',
            'around-lg': '0 0 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)), 0 0 6px 4px var(--un-shadow-color, rgb(0 0 0 / 0.1))',
            'around-xl': '0 0 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)), 0 0 10px 6px var(--un-shadow-color, rgb(0 0 0 / 0.1))',
            'around-2xl': '0 0 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25))',
            'inner-around': 'inset 0 0 4px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05))',
        },
        colors: {
            "primary": `rgba(var(--color-primary), %alpha)`,
            "primary-light": `rgba(var(--color-primary-light), %alpha)`,
            "surface-primary": `rgba(var(--color-surface-primary), %alpha)`,
            "surface-secondary": `rgba(var(--color-surface-secondary), %alpha)`,
            "surface-alert": `rgba(var(--color-surface-alert), %alpha)`,
            "surface-success": `rgba(var(--color-surface-success), %alpha)`,
        }
    },
    presets: [
        presetIcons({
            prefix: 'icon-',
            scale: 1.2,
        }),
        presetUno(),
        presetTypography(),
    ],
    transformers: [transformerVariantGroup(), transformerDirectives()],
});