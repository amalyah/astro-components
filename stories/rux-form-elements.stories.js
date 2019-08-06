/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { RuxButton } from '../src/components/rux-button/rux-button.js';
import inputFieldsReadme from '../src/css/documentation/input-fields-README.md';
import checkboxesReadme from '../src/css/documentation/checkboxes-README.md';
import radioButtonsReadme from '../src/css/documentation/radio-buttons-README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Form Elements', module)
    .add(
        'Checkboxes',
        () => {
          return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
          <ul>
            <li class="rux-checkbox">
              <input type="checkbox" name="checkbox1c" id="checkbox1c" />
              <label for="checkbox1c">Checkbox</label>
            </li>
            <li class="rux-checkbox">
              <input type="checkbox" name="checkbox2c" id="checkbox2c" checked />
              <label for="checkbox2c">Checkbox checked</label>
            </li>
            <li class="rux-checkbox">
              <input type="checkbox" name="checkbox3c" id="checkbox3c" disabled />
              <label for="checkbox3c">Checkbox disabled</label>
            </li>
            <li class="rux-checkbox">
              <input type="checkbox" name="checkbox4c" id="checkbox4c" checked disabled />
              <label for="checkbox4c">Checkbox disabled checked</label>
            </li>
          </ul>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: checkboxesReadme,
          },
        }
    )
    .add(
        'Radio Buttons',
        () => {
          return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
          <ul>
            <li class="rux-radio-button">
              <input type="radio" name="radio1c" id="radio1c" />
              <label for="radio1c">Radio Button</label>
            </li>
            <li class="rux-radio-button">
              <input type="radio" name="radio1c" id="radio2c" checked />
              <label for="radio2c">Radio Button checked</label>
            </li>
            <li class="rux-radio-button">
              <input type="radio" name="radio2c" id="radio3c" disabled />
              <label for="radio3c">Radio Button disabled</label>
            </li>
            <li class="rux-radio-button">
              <input type="radio" name="radio2c" id="radio4c" checked disabled />
              <label for="radio4c">Radio Button disabled checked</label>
            </li>
          </ul>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: radioButtonsReadme,
          },
        }
    )
    .add(
        'Input Fields',
        () => {
          return html`
        <style>
          ul {
            column-count: 3;
            column-gap: 3rem;
            margin: 0 0 4rem;
            padding: 0;
            width: 100%;
          }
          li {
            margin: 0 0 1rem;
            -webkit-column-break-inside: avoid;
          }
        </style>
        <div style="padding: 10vh 5vw; display: flex; flex-flow: column; justify-content: center;">
          <ul class="rux-form">
            <li class="rux-form-field">
              <label for="input__text">Text Input</label>
              <input id="input__text" class="rux-input" type="text" placeholder="Text Input" />
            </li>
            <li class="rux-form-field">
              <label for="input__required">Is Required</label>
              <input id="input__required" class="rux-input" type="text" value=" " required />
            </li>
            <li class="rux-form-field">
              <label for="input__invalid">Invalid</label>
              <input id="input__invalid" class="rux-input" type="text" required />
            </li>
            <li class="rux-form-field">
              <label for="input__disabled">Disabled</label>
              <input id="input__disabled" class="rux-input" type="text" disabled />
            </li>
            <li class="rux-form-field">
              <label for="input__password">Password</label>
              <input id="input__password" class="rux-input" type="password" placeholder="********" />
            </li>
            <li class="rux-form-field">
              <label for="input__url">Web Address</label>
              <input id="input__url" class="rux-input" type="url" placeholder="https://domain.com" />
            </li>
            <li class="rux-form-field">
              <label for="input__email">Email Address</label>
              <input id="input__email" class="rux-input" type="email" placeholder="user@domain.com" />
            </li>
            <li class="rux-form-field">
              <label for="input__tel">Phone Number</label>
              <input id="input__tel" class="rux-input" type="tel" placeholder="(999) 999-9999" />
            </li>
            <li class="rux-form-field">
              <label for="input__search">Search</label>
              <input id="input__search" class="rux-input" type="search" placeholder="Enter Search Term" />
            </li>
            <li class="rux-form-field">
              <label for="input__number">Number Input</label>
              <input
                id="input__number"
                class="rux-input"
                type="number"
                min="0"
                max="10"
                placeholder="Enter a Number between 0 and 10"
              />
            </li>
            <li class="rux-form-field">
              <label for="input__textarea">Textarea</label>
              <textarea id="input__textarea" class="rux-input" placeholder="Multiline text is ok"></textarea>
            </li>
            <!-- Styles for these HTML5 input types still need to be implemented 
            <li class="rux-form-field">
              <label for="input__color">Color input</label>
              <input class="rux-input" type="color" id="input__color" value="#000000">
            </li>
            <li class="rux-form-field">
              <label for="input__range">Range input</label>
              <input class="rux-input" type="range" id="input__range" value="10">
            </li>
            <li class="rux-form-field">
              <label for="input__date">Date input</label>
              <input class="rux-input" type="date" id="input__date" value="1970-01-01">
            </li>
            <li class="rux-form-field">
              <label for="input__month">Month input</label>
              <input class="rux-input" type="month" id="input__month" value="1970-01">
            </li>
            <li class="rux-form-field">
              <label for="input__week">Week input</label>
              <input class="rux-input" type="week" id="input__week" value="1970-W01">
            </li>
            <li class="rux-form-field">
              <label for="input__datetime">Datetime input</label>
              <input class="rux-input" type="datetime" id="input__datetime" value="1970-01-01T00:00:00Z">
            </li>
            <li class="rux-form-field">
              <label for="input__datetime-local">Datetime-local input</label>
              <input class="rux-input" type="datetime-local" id="input__datetime-local" value="1970-01-01T00:00">
            </li>
            <li class="rux-form-field">
              <div class="rux-button-group">
                <input class="rux-button" type="submit" value="input type=submit">
              </div>
            </li>
            <li class="rux-form-field">
              <div class="rux-button-group">
               <input class="rux-button" type="button" value="input type=button">
              </div>
            </li>
            <li class="rux-form-field">
              <div class="rux-button-group">
                <input class="rux-button" type="reset" value="input type=reset">
              </div>
            </li>
            <li class="rux-form-field">
              <div class="rux-button-group">
               <input class="rux-button" type="submit" value="input disabled" disabled>
              </div>
            </li> -->
          </ul>
          <ul class="rux-form">
            <li class="rux-form-field rux-form-field--small">
              <label for="input__text-smaller">Smaller Text Input</label>
              <input id="input__text-smaller" class="rux-input" type="text" placeholder="Text Input" />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__required-smaller">Smaller Is Required</label>
              <input id="input__required-smaller" class="rux-input" type="text" value=" " required />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__invalid-smaller">Smaller Invalid</label>
              <input id="input__invalid-smaller" class="rux-input" type="text" required />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__disabled-smaller">Smaller Disabled</label>
              <input id="input__disabled-smaller" class="rux-input" type="text" disabled />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__password-smaller">Smaller Password</label>
              <input id="input__password-smaller" class="rux-input" type="password" placeholder="********" />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__url-smaller">Smaller Web Address</label>
              <input id="input__url-smaller" class="rux-input" type="url" placeholder="https://domain.com" />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__email-smaller">Smaller Email Address</label>
              <input id="input__email-smaller" class="rux-input" type="email" placeholder="user@domain.com" />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__tel-smaller">Smaller Phone Number</label>
              <input id="input__tel-smaller" class="rux-input" type="tel" placeholder="(999) 999-9999" />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__search-smaller">Smaller Search</label>
              <input id="input__search-smaller" class="rux-input" type="search" placeholder="Enter Search Term" />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__number-smaller">Smaller Number Input</label>
              <input
                id="input__number-smaller"
                class="rux-input"
                type="number"
                min="0"
                max="10"
                placeholder="Enter a Number between 0 and 10"
              />
            </li>
            <li class="rux-form-field rux-form-field--small">
              <label for="input__textarea-smaller">Smaller Textarea</label>
              <textarea id="input__textarea-smaller" class="rux-input" placeholder="Multiline text is ok"></textarea>
            </li>
          </ul>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: inputFieldsReadme,
          },
        }
    )
    .add(
        'Combinations',
        () => {
          return html`
        <style>
          .horizontal {
            padding: 1rem;
            margin: 4rem;
            align-content: center;
            justify-content: center;
            display: flex;
          }

          .horizontal > * {
            margin: 0.25rem;
          }
        </style>

        <div class="horizontal">
          <div class="rux-form-field">
            <input id="input__email" class="rux-input" type="email" placeholder="user@domain.com" />
          </div>

          <select class="rux-select">
            <optgroup>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </optgroup>
          </select>

          <button class="rux-button">Test</button>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
        }
    );
