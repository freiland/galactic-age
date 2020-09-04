import {keyInfo} from '../src/js/blscripts.js';



describe('keyInfo class', () => {

  let userInfo;

  beforeEach(() => {
    userInfo = new keyInfo(25,'hispanic');
  });

  test('should correctly create a keyInfo object with 25 as age and hispanic as race', () => {
    expect(userInfo.age).toEqual(25);
    expect(userInfo.race).toEqual('hispanic');
  });

  test('should correctly convert Earth years into Mercury years', () => {
    expect(userInfo.mercuryYear()).toEqual(104);
  });

  test('should correctly convert Earth years into Venus years', () => {
    expect(userInfo.venusYear()).toEqual(40);
  });

});







