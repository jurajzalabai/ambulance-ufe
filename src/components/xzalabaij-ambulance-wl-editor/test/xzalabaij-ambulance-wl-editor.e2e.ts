import { newE2EPage } from '@stencil/core/testing';

describe('xzalabaij-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xzalabaij-ambulance-wl-editor></xzalabaij-ambulance-wl-editor>');

    const element = await page.find('xzalabaij-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
