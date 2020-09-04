import {keyInfo, raceExpect} from '../src/js/blscripts.js';



describe('keyInfo class', () => {

  let userInfo;

  beforeEach(() => {
    userInfo = new keyInfo(25,'Hispanic American');
  });

  test('should correctly create a keyInfo object with 25 as age and hispanic as race', () => {
    expect(userInfo.age).toEqual(25);
    expect(userInfo.race).toEqual('Hispanic American');
  });

  test('should correctly convert Earth years into Mercury years', () => {
    expect(userInfo.mercuryYear()).toEqual(104);
  });

  test('should correctly convert Earth years into Venus years', () => {
    expect(userInfo.venusYear()).toEqual(40);
  });

  test('should correctly convert Earth years into Mars years', () => {
    expect(userInfo.marsYear()).toEqual(13);
  });

  test('should correctly convert Earth years into Jupiter years', () => {
    expect(userInfo.jupiterYear()).toEqual(2);
  });

  test('should correctly return life expectancy on Earth according to race of user', () => {
    expect(raceExpect[userInfo.race]).toEqual(82);
  });

  test('should correctly return the time left on plante Earth using race life expectancy and input age', () => {
    expect(raceExpect[userInfo.race]).toEqual(9);
  });

});







