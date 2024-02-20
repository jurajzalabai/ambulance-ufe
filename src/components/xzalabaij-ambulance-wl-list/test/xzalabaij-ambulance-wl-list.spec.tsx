import { newSpecPage } from '@stencil/core/testing';
import { XzalabaijAmbulanceWlList } from '../xzalabaij-ambulance-wl-list';

describe('xzalabaij-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XzalabaijAmbulanceWlList],
      html: `<xzalabaij-ambulance-wl-list></xzalabaij-ambulance-wl-list>`,
    });
    
    const wlList = page.rootInstance as XzalabaijAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
