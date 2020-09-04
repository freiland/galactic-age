import {keyInfo, raceExpect, timeOnEarth} from '../src/js/blscripts.js';


describe('old age test', () => {

  let userInfo;

  beforeEach(() => {
    userInfo = new keyInfo(90,'African American');
  });

  test('should return a user info object with 90 as age and african american as race', () => {
    expect(userInfo.age).toEqual(90);
    expect(userInfo.race).toEqual('African American');
  });

  test('should return a user info object with 90 as age and african american as race', () => {
    expect(userInfo.timeOnEarth()).toEqual(15);
    
  });

});