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

  timeOnEarth () {
    let age = this.age;
    let expectancy = raceExpect[this.race];
    let remain = expectancy - age;
    
    return remain;
  }

  timeOnMercury () {
    let age = Math.round(this.age/.24);
    let expectancy = mercuryExpect[this.race];
    let remain = expectancy - age;
    
    return remain;
  }

  timeOnVenus () {
    let age = Math.round(this.age/.62);
    let expectancy = venusExpect[this.race];
    let remain = expectancy - age;
    
    return remain;
  }

  timeOnMars () {
    let age = (this.age/1.88);
    let expectancy = marsExpect[this.race];
    let remain = expectancy - age;
    
    return Math.round(remain);
  }
  

  //getArea() {
  //return this.side1 * this.side2;
  //}
}

export let raceExpect = {
  'Native American':75,
  'African American':75,
  'White American':79,
  'Hispanic American':82,
  'Asian American':86
};

export let mercuryExpect = {
  'Native American':Math.round(75/.24),
  'African American':Math.round(75/.24),
  'White American':Math.round(79/.24),
  'Hispanic American':Math.round(82/.24),
  'Asian American':Math.round(86/.24)
};

export let venusExpect = {
  'Native American':Math.round(75/.62),
  'African American':Math.round(75/.62),
  'White American':Math.round(79/.62),
  'Hispanic American':Math.round(82/.62),
  'Asian American':Math.round(86/.62)
};

export let marsExpect = {
  'Native American':(75/1.88),
  'African American':(75/1.88),
  'White American':(79/1.88),
  'Hispanic American':(82/1.88),
  'Asian American':(86/1.88)
};

export let jupiterExpect = {
  'Native American':Math.round(75/11.86),
  'African American':Math.round(75/11.86),
  'White American':Math.round(79/11.86),
  'Hispanic American':Math.round(82/11.86),
  'Asian American':Math.round(86/11.86)
};