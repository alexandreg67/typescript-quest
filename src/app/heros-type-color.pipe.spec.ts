import { herosTypeColorPipe } from './heros-type-color.pipe';

describe('HerosTypeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new herosTypeColorPipe();
    expect(pipe).toBeTruthy();
  });
});
