import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    bg?: string;
    text?: string;
    font?: string;
    p?: string;
    m?: string;
    border?: string;
  }
}
