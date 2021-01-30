/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class WhInput extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 8px 0;
      }
      :host([disabled]) .fieldInputLabel {
        background-color: transparent;
      }
      * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      }
      .inputContainer {
        position: relative;
        margin-top: 12px;
      }
      .fieldInput {
        box-sizing: border-box;
        padding: 0 9px;
        width: 100%;
        height: 56px;
        background: #fff;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        position: relative;
        font-size: 16pt;
        z-index: 1;
        -webkit-appearance: none;
        transition: border 0.2s cubic-bezier(1, 0, 0, 1);
      }
      .fieldInput:focus {
        outline: none;
        border: 2px solid #6200ee;
      }
      .fieldInput:not(:focus):hover:not(:disabled) {
        border: 1px solid #000000de;
      }
      .fieldInput:focus ~ .fieldInputLabel {
        color: #6200ee;
        font-weight: 500;
      }
      .fieldInput:disabled {
        color: #8a8a8a;
        background-color: #e6e6e6;
      }
      @media (prefers-color-scheme: dark) {
        .fieldInput {
          background-color: #202020;
          color: white;
          border: 1px solid #b3b3b3;
        }
        .fieldInput:focus {
          outline: none;
          border: 2px solid #bb86fc;
        }
        .fieldInput:not(:focus):hover:not(:disabled) {
          border: 1px solid white;
        }
        .fieldInput:disabled {
          color: #b3b3b3;
          background-color: #313131;
        }
      }
      .fieldInputLabel {
        z-index: 2;
        position: absolute;
        top: 18px;
        left: 2px;
        color: #222;
        background: #fff;
        transition: transform 0.2s cubic-bezier(1, 0, 0, 1), font-size 0.2s cubic-bezier(1, 0, 0, 1), color 0.2s cubic-bezier(1, 0, 0, 1);
        transform: translate(4px, -27px);
        font-size: 12px;
        pointer-events: none;
      }
      .fieldInputLabel,
      .fieldInputLabel supports:placeholder-shown {
        transform: translate(0px, 0px);
        font-size: 1rem;
        color: #8a8a8a;
        padding: 0 4px;
      }
      .fieldInput:focus ~ .fieldInputLabel,
      .fieldInput:not(:placeholder-shown) ~ .fieldInputLabel {
        transform: translate(4px, -27px);
        font-size: 12px;
        font-weight: 500;
      }
      @media (prefers-color-scheme: dark) {
        .fieldInputLabel {
          background-color: #202020;
          color: #b3b3b3;
        }
      }
      @media (prefers-color-scheme: dark) {
        .fieldInput:focus ~ .fieldInputLabel {
          color: #bb86fc;
        }
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
      autocomplete: { type: String },
      type: { type: String },
      value: { type: String },
      disabled: { type: Boolean, reflect:true }
    };
  }

  constructor() {
    super();
    if (this.value == undefined) {
      this.value = '';
    }
    this.name = 'input';
    // this.disabled = true;
  }

  render() {
    return html`
      <div class="inputContainer">
        <input .value=${this.value} @input=${(e) => {
        this.value = e.target.value;
        this.event();
        }} @change=${(e) => this.dispatchEvent(new Event('change'))} class="fieldInput"
          name=${this.name} id=${this.name} placeholder=" " type="${this.type}" autocomplete="${this.autocomplete}">
        <label class="fieldInputLabel" for=${this.name}>
          <slot></slot>
        </label>
      </div>
    `;
  }

  event() {
    console.log(this.value);

  }
}

window.customElements.define('wh-input', WhInput);
