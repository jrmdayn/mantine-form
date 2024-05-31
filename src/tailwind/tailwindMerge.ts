import { extendTailwindMerge } from 'tailwind-merge';

import { tailwindConfig } from './tailwindTheme';

export const tailwindMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: Object.keys(tailwindConfig.spacing),
      borderWidth: Object.keys(tailwindConfig.borderWidth),
    },
    classGroups: {
      'font-size': [
        {
          text: Object.keys(tailwindConfig.fontSize),
        },
      ],
      'font-weight': [
        {
          font: Object.keys(tailwindConfig.fontWeight),
        },
      ],
      'max-h': [{ 'max-h': Object.keys(tailwindConfig.extend.maxHeight) }],
      'max-w': [
        {
          'max-w': Object.keys(tailwindConfig.extend.maxWidth),
        },
      ],
    },
  },
});
