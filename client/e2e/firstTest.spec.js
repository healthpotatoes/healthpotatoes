// Example for Detox testing

describe('Truth', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('is true', async () => {
    await expect(true).toEqual(true);
  });
});
