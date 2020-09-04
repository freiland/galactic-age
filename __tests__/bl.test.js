import {keyInfo} from '../src/js/blscripts.js';


describe ('keyInfo class with input user personal data', () => {
  test('should correctly create a keyInfo class with a users age and race', () => {
    const newUser = new keyInfo (25, 'hispanic');
    expect(newUser.age).toEqual(25);
    expect(newUser.race).toEqual('hispanic');
  });
});
