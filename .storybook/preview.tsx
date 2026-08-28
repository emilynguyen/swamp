import type { Preview } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'
import '../src/app/globals.css'

const H1 = (props: ComponentProps<'h1'>) => (
  <h1
    {...props}
    className={`sb-unstyled denim-l ${props.className ?? ''}`}
    style={{ marginTop: 0, marginBottom: '0.4em', ...props.style }}
  />
)
const H2 = (props: ComponentProps<'h2'>) => (
  <h2
    {...props}
    className={`sb-unstyled denim-xs ${props.className ?? ''}`}
    style={{ marginTop: '1em', marginBottom: '0.5em', ...props.style }}
  />
)
const H3 = (props: ComponentProps<'h3'>) => (
  <h3
    {...props}
    className={`sb-unstyled helvetica-xl ${props.className ?? ''}`}
    style={{ marginTop: '0.8em', marginBottom: '0.4em', ...props.style }}
  />
)
const P = (props: ComponentProps<'p'>) => (
  <p
    {...props}
    className={`sb-unstyled helvetica-s ${props.className ?? ''}`}
    style={{ marginBottom: '0.8em', ...props.style }}
  />
)
const Li = (props: ComponentProps<'li'>) => (
  <li
    {...props}
    className={`sb-unstyled helvetica-s-tall ${props.className ?? ''}`}
    style={{ marginBottom: '0.3em', ...props.style }}
  />
)
const Code = (props: ComponentProps<'code'>) => (
  <code
    {...props}
    className={`sb-unstyled geist-m text-transparent-dark-alpha-40 ${props.className ?? ''}`}
  />
)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    docs: {
      components: { h1: H1, h2: H2, h3: H3, p: P, li: Li, code: Code },
    },
  },
};

export default preview;
