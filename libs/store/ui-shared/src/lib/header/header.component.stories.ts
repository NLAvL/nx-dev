import { text, number, boolean } from '@storybook/addon-knobs';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: HeaderComponent,
  props: {
    title: text('title', ''),
  }
})