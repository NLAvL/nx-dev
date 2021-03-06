import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { MatToolbarModule } from '@angular/material/toolbar';
import { text } from '@storybook/addon-knobs';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [MatToolbarModule],
  },
  component: HeaderComponent,
  props: {
    title: text('title', ''),
  },
});
