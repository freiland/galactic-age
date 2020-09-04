export class keyInfo {
  constructor(age, race) {
    this.age = age;
    this.race = race;
  }

  mercuryYear () {
    let age = (this.age/.24) ;
    return Math.round(age);

  }

  venusYear () {
    let age = (this.age/.62) ;
    return Math.round(age);

  }

  marsYear () {
    let age = (this.age/1.88) ;
    return Math.round(age);

  }

  jupiterYear () {
    let age = (this.age/11.86) ;
    return Math.round(age);

  }

  //getArea() {
  //return this.side1 * this.side2;
  //}
}