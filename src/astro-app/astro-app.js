import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import {
  RuxGlobalStatusBar
} from "../astro-components/rux-global-status-bar/rux-global-status-bar.js";
import {
  RuxSegmentedButton
} from "../astro-components/rux-segmented-button/rux-segmented-button.js";
import {
  RuxComponent
} from "../astro-components/rux-component/rux-component.js";
import {
  RuxProgress
} from "../astro-components/rux-progress/rux-progress.js";
import {
  RuxButton
} from "../astro-components/rux-button/rux-button.js";
import {
  RuxStatus
} from "../astro-components/rux-status/rux-status.js";
import {
  RuxIcon
} from "../astro-components/rux-icon/rux-icon.js";
import {
  RuxTabs
} from "../astro-components/rux-tabs/rux-tabs.js";
import {
  RuxPopUpMenu
} from "../astro-components/rux-pop-up-menu/rux-pop-up-menu.js";
import {
  RuxClock
} from "../astro-components/rux-clock/rux-clock.js";
import {
  RuxDialog
} from "../astro-components/rux-dialog/rux-dialog.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return html `

    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }


      rux-button.demo-button--hover button {
        background-color: red !important;
      }

      section {
        /* outline: 1px solid red; */
        margin: 1em;
        padding: 1em;
        background-color: rgba(0,0,0,0.2);
      }

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: auto;
        padding: 0;
        margin: 0;
        
      }

      ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon-library li {
        border: 1px solid rgba(255,255,255,0.2);
        
        margin-top: -1px;
        margin-left: -1px;
        
        font-family: monospace;
        text-align: center;

        max-width: 100px;
        padding: 1em;
      }

      

      .icon-library figcaption {
        margin-top: 0.5rem;
      }

      code {
        font-family: monospace;
        font-size: 1.1rem;
        padding: 0.2rem 0.5rem;
        margin: 0 0.5rem;
        background: rgba(0,0,0,0.3);
      }

      p code {
        color: #329FFF;
      }


    </style>
    
    <rux-global-status-bar
      appname="RUX">
      <rux-tabs slot="tabs">
        <rux-tab id="tab-pop-ups">Pop Ups</rux-tab>
        <rux-tab id="tab-icons">Icons</rux-tab> 
        <rux-tab id="tab-buttons">Buttons</rux-tab>
        <rux-tab id="tab-clock">Clock</rux-tab>
        <rux-tab id="tab-data-visualization">Data</rux-tab>
        <rux-tab id="tab-dialog">Dialog</rux-tab>
        <rux-tab id="tab-form">Form</rux-tab>
        <rux-tab id="tab-icon">Icon</rux-tab>
        <rux-tab id="tab-log">Log</rux-tab>
        <rux-tab id="tab-progress">Progress</rux-tab>
        <rux-tab id="tab-status-indicator">Status</rux-tab>
        <rux-tab id="tab-text-formatting">Text</rux-tab>
        <rux-tab id="tab-timeline">Timeline</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>

    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-pop-ups">
        <section>
          <h1>Pop Ups</h1>
          <ul>
            <li><rux-button on-click="_showStatus">Pop-up Below</rux-button></li>
            <li><rux-button on-click="_showStatus">Pop-up Above</rux-button></li>
            <li><rux-button on-click="_showStatus">Pop-up Left</rux-button></li>
            <li><rux-button on-click="_showStatus">Pop-up Right</rux-button></li>
          </ul>
        </section>

        <rux-pop-up-menu 
          id="status-pop-up"></rux-pop-up-menu>
        


      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-icons">
       
        
        <section>
          <h1>Default Icon Set</h1>
          <p>Standard Astro Icons that can be used across all types of Astro based applications.</p>
          <p>To use a defaul icon use the <code>default</code> namespace. E.g., <code>&lt;rux-icon icon="default:settings"&gt;&lt/rux-icon&gt;</code></p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="default:settings"></rux-icon><figcaption>settings</figcaption></figure></li>
            <li><figure><rux-icon icon="default:notifications"></rux-icon><figcaption>notifications</figcaption></figure></li>
            <li><figure><rux-icon icon="default:caution"></rux-icon><figcaption>caution</figcaption></figure></li>
          </ul>
        </section>

        <section>
          <h1>Advanced Status Icons</h1>
          <p>Advanced Status Icons for SATCOM based applications.</p>
          <p>To use a defaul icon use the <code>advanced-status</code> namespace. E.g., <code>&lt;rux-icon icon="advanced-status:processor"&gt;&lt/rux-icon&gt;</code></p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="advanced-status:mission"></rux-icon><figcaption>mission</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:equipment"></rux-icon><figcaption>equipment</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:processor"></rux-icon><figcaption>processor</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:antenna"></rux-icon><figcaption>antenna</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:antenna-transmit"></rux-icon><figcaption>antenna-transmit</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:antenna-receive"></rux-icon><figcaption>antenna-receive</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:satellite"></rux-icon><figcaption>satellite</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:satellite-transmit"></rux-icon><figcaption>satellite-transmit</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:satellite-receive"></rux-icon><figcaption>satellite-receive</figcaption></figure></li>
          </ul>
        </section>

        <section>
          <h1>EGS Advanced Status Icons</h1>
          <p>Advanced Status Icons for EGS based applications.</p>
          <p>To use a defaul icon use the <code>advanced-status-egs</code> namespace. E.g., <code>&lt;rux-icon icon="advanced-status-egs:netcom"&gt;&lt/rux-icon&gt;</code></p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="advanced-status-egs:antenna"></rux-icon><figcaption>antenna</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:payload"></rux-icon><figcaption>payload</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:altitude"></rux-icon><figcaption>altitude</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:propulsion-power"></rux-icon><figcaption>propulsion-power</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:netcom"></rux-icon><figcaption>netcom</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:thermal"></rux-icon><figcaption>thermal</figcaption></figure></li>
          </ul>
          
        </section>

        <section>
          <h1>Default Status Symbols</h1>
          <p>Note: It is recommended you use <code>&lt;rux-status status="ok"&gt;&lt/rux-status&gt;</code> instead of the raw status symbol icons. <code>&lt;rux-status&gt;</code> provides additional functionality beyond simple graphic represenations.</p>
          <p>Status icons have embedded fill colors as defined in the Astro UXDS Guideline. These colors cannot be overriden with the color property like other icons. <em><strong>Only standard status colors are supported.</strong></em>.</p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="status:emergency"></rux-icon><figcaption>emergency</figcaption></figure></li>
            <li><figure><rux-icon icon="status:caution"></rux-icon><figcaption>caution</figcaption></figure></li>
            <li><figure><rux-icon icon="status:error"></rux-icon><figcaption>error</figcaption></figure></li>
            <li><figure><rux-icon icon="status:ok"></rux-icon><figcaption>ok</figcaption></figure></li>
            <li><figure><rux-icon icon="status:standby"></rux-icon><figcaption>standby</figcaption></figure></li>
            <li><figure><rux-icon icon="status:off"></rux-icon><figcaption>off</figcaption></figure></li>
          </ul>
        </section>
        
        
        
      

      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-buttons">
        

      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-clock">
       <section>
          <h1>Clock</h1>
          <h2>Rux Clock, no properties set (defaults to UTC)</h2>
          <rux-clock></rux-clock>
          <h2>Clock with LOS/AOS set, custom timezone, hidden date</h2>
          <rux-clock
            aos="00:10:11"
            los="00:11:11"
            timezone="America/Los_Angeles"></rux-clock>
          <h2>Clock with hidden timezone</h2>
          <rux-clock
            hide-timezone="true"></rux-clock>
        </section>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-data-visualization">
        <rux-spectrum-analyzer></rux-spectrum-analyzer>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-dialog">
        <rux-dialog></rux-dialog>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-form">
          <h2>Buttons</h2>
          <h2>Checkbox</h2>
          <h2>Input Fields</h2>
          <h2>Radio Button</h2>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-icon">
        <rux-button type="icon" icon="default:notifications">Notifications</rux-button>
        <rux-button type="icon" icon="default:settings">Settings</rux-button>
        <rux-button icon="advanced-status-egs:netcom">Master Off</rux-button>
          <rux-status
            status="emergency"
            label="Netcom"
            sublabel="Ok"
            notifications="10"
            icon="advanced-status-egs:netcom"></rux-status>
          <rux-status
            status="emergency"
            label="Advanced Status"
            notifications="1"
            sublabel="Error"
            icon="advanced-status-egs:thermal"></rux-status>
          <rux-status
            status="standby"
            label="Standby"
            sublabel="Standby"
            notifications="100000"
            icon="advanced-status-egs:propulsion-power"></rux-status>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-log">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-progress">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-status-indicator">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-text-formatting">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-timeline">
      </rux-tab-panel>
    </rux-tab-panels>
    `;
  }
  constructor() {
    super();
    this.name = "3.0 preview";
    this.timeSelector = {
      buttons: [{
          label: "Hour"
        },
        {
          label: "Day"
        },
        {
          label: "Week"
        }
      ]
    };
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
  }
  _stringIt(obj) {
    return JSON.stringify(obj);
  }
  _showStatus(e) {
    e.target.setAttribute("data-pop-up-target", true);

    let _target = {
      "x": e.clientX,
      "y": e.clientY,
      "target": e.target
    };
    console.log("typeof", typeof _target);

    // this.root.getElementById('pop-menu').attribute('target',e.target)
    // console.log('pop-up-menu', this.root.getElementById('pop-menu'));

    this.root.getElementById("status-pop-up").setAttribute("target", {
      "x": "test"
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    suer.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("astro-app", AstroApp);
