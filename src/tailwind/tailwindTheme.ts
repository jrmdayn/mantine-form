import { transparentize } from 'polished';
import type { Config as TailwindConfig } from 'tailwindcss';

import { colors } from './colors';

const darkBlue = colors.offScale.chathamsBlue;

const lineHeight = {
  xs: '9.55px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '40px',
  xxl: '48px',
  '3xl': '64px',
} as const;

const notificationWidth = 576;
const panelWidth = 498;
const checkBoxSize = 20;

const ANIMATIONS = {
  transitionDuration: {
    short: '.1s',
    medium: '.25s',
    mediumExpand: '.25s',
    mediumCollapse: '.2s',
    long: '.3s',
    longExpand: '.3s',
    longCollapse: '.25s',
  },
  transitionEasing: {
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
};

export const tailwindConfig = {
  extend: {
    flexBasis: {
      'modal-small': '480px',
      'modal-medium': '640px',
      'modal-large': '960px',
    },
    width: {
      notification: `${notificationWidth}px`,
      panel: `${panelWidth}px`,
      checkbox: `${checkBoxSize}px`,
    },
    maxWidth: {
      'line-s': '376px',
      'line-m': '472px',
      'line-l': '608px',
      notification: `${notificationWidth}px`,
      panel: `${panelWidth}px`,
      'number-input': '48px',
    },
    minWidth: {
      button: '80px',
      'button-with-icon': '40px',
      checkbox: `${checkBoxSize}px`,
    },
    height: {
      breadcrumb: '48px',
      button: '40px',
      header: '64px',
      checkbox: `${checkBoxSize}px`,
    },
    maxHeight: {
      input: '40px',
      'dropdown-menu': '480px',
    },
    minHeight: {
      input: '40px',
    },
    dropShadow: {
      card: [
        `0 8px 24px ${transparentize(0.85, darkBlue)}`,
        `0 4px 8px ${transparentize(0.75, darkBlue)}`,
      ],
    },
    transitionTimingFunction: {
      accelerate: ANIMATIONS.transitionEasing.accelerate,
      decelerate: ANIMATIONS.transitionEasing.decelerate,
    },
    keyframes: {
      'button-focus-danger': {
        '0%': {
          'box-shadow': `0 0 0 6px ${colors.components.danger.outline}`,
        },
        '100%': {
          'box-shadow': `0 0 0 2px ${colors.components.danger.outline}`,
        },
      },
      'button-focus-warning': {
        '0%': {
          'box-shadow': `0 0 0 6px ${colors.components.warning.outline}`,
        },
        '100%': {
          'box-shadow': `0 0 0 2px ${colors.components.warning.outline}`,
        },
      },
      'button-focus-primary': {
        '0%': {
          'box-shadow': `0 0 0 6px ${colors.components.primary.outline}`,
        },
        '100%': {
          'box-shadow': `0 0 0 2px ${colors.components.primary.outline}`,
        },
      },
      'radio-inner-bounce': {
        '0%': {
          transform: 'translateX(-50%) translateY(-50%) scale(1.1)',
          opacity: '1',
        },
        '50%': {
          transform: 'translateX(-50%) translateY(-50%) scale(1.6)',
          opacity: '.7',
        },
        '60%': {
          transform: 'translateX(-50%) translateY(-50%) scale(0.6)',
          opacity: '1',
        },
        '80%': { transform: 'translateX(-50%) translateY(-50%) scale(0.95)' },
        '100%': {
          transform: 'translateX(-50%) translateY(-50%) scale(0.85)',
          opacity: '1',
        },
      },
      hide: {
        '0%': {
          opacity: '1',
        },
        '100%': {
          opacity: '0',
        },
      },
      display: {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'hide-to-half-opacity': {
        '0%': {
          opacity: '1',
        },
        '100%': {
          opacity: '0.5',
        },
      },
      'hide-from-half-opacity': {
        '0%': {
          opacity: '0.5',
        },
        '100%': {
          opacity: '0',
        },
      },
      'background-from-white-to-green': {
        '0%': {
          'background-color': colors.background.white,
        },
        '100%': {
          'background-color': colors.green.background,
        },
      },
    },
    animation: {
      'button-focus-danger': `button-focus-danger ${ANIMATIONS.transitionDuration.short} ${ANIMATIONS.transitionEasing.accelerate} 1`,
      'button-focus-warning': `button-focus-warning ${ANIMATIONS.transitionDuration.short} ${ANIMATIONS.transitionEasing.accelerate} 1`,
      'button-focus-primary': `button-focus-primary ${ANIMATIONS.transitionDuration.short} ${ANIMATIONS.transitionEasing.accelerate} 1`,
      'radio-inner-bounce': `radio-inner-bounce ${ANIMATIONS.transitionDuration.medium} ${ANIMATIONS.transitionEasing.accelerate} 1`,
    },
    zIndex: {
      header: '6',
      dropdown: '10',
      modal: '14',
      panel: '15',
      notification: '25',
    },
    backgroundImage: {
      'disabled-input': `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 1px,
          ${colors.grey[20]} 1px,
          ${colors.grey[20]} 2px
        )`,
    },
    backdropBlur: {
      s: '2px',
    },
  },

  screens: {
    tablet: '720px',
    laptop: '1024px',
    desktop: '1280px',
    tabletHeight: { raw: '(max-height: 700px)' },
  },
  colors: colors,
  spacing: {
    zero: '0',
    xxs: '2px',
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '24px',
    xl: '48px',
    xxl: '96px',
  },
  borderRadius: {
    none: '0',
    regular: '4px',
    DEFAULT: '4px',
    large: '8px',
    full: '9999px',
  },
  borderWidth: {
    zero: '0',
    regular: '1px',
    DEFAULT: '1px',
    large: '2px',
  },
  boxShadow: {
    none: '0 0 #0000',
    DEFAULT: '0 0 0 2px transparent',
    panel: `0 8px 24px ${transparentize(0.8, darkBlue)}`,
    modal: `0 4px 24px ${transparentize(0.9, darkBlue)}`,
    popup: `0px 0px 24px 0px ${darkBlue}`,
    badge: `0 8px 24px ${transparentize(0.8, darkBlue)}`,
    notification: `0 16px 32px ${transparentize(0.8, darkBlue)}`,
    dropdown: `0px 8px 24px ${transparentize(0.85, darkBlue)}`,
  },
  fontSize: {
    xs: ['8px', lineHeight.xs],
    s: ['11.2px', lineHeight.s],
    m: ['14px', lineHeight.m],
    l: ['17.5px', lineHeight.l],
    xl: ['21.9px', lineHeight.l],
    xxl: ['27.3px', lineHeight.l],
    '3xl': ['34.2px', lineHeight.xl],
    '4xl': ['42.7px', lineHeight.xxl],
    '5xl': ['53.4px', lineHeight['3xl']],
  },
  lineHeight,
  fontWeight: {
    bold: '700',
    normal: '400',
    semiBold: '600',
  },
  fontFamily: {
    DEFAULT:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  transitionDuration: ANIMATIONS.transitionDuration,
} as const satisfies TailwindConfig['theme'];
