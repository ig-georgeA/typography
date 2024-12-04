import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
    }
    .h6 {
      color: var(--ig-primary-500);
      height: max-content;
      min-width: min-content;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <h6 class="h6">
        Heading
      </h6>
      <h2 class="content">
        Heading
      </h2>
      <p class="typography__subtitle-1 content">
        Heading
      </p>
    `;
  }
}
