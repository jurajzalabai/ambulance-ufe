import { newSpecPage } from '@stencil/core/testing';
import { XzalabaijAmbulanceWlApp } from '../xzalabaij-ambulance-wl-app';

describe('xzalabaij-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XzalabaijAmbulanceWlApp],
      html: `<xzalabaij-ambulance-wl-app base-path="/"></xzalabaij-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xzalabaij-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XzalabaijAmbulanceWlApp],
      html: `<xzalabaij-ambulance-wl-app base-path="/ambulance-wl/"></xzalabaij-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xzalabaij-ambulance-wl-list");
  });
});