import { newE2EPage } from '@stencil/core/testing';

describe('xzalabaij-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xzalabaij-ambulance-wl-app></xzalabaij-ambulance-wl-app>');

    const element = await page.find('xzalabaij-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
