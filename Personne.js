class Personne {
        
    constructor(name, age) {
      this.name = name ;
      this.age = age;
    }
  
    getName() {
      return this.name;
    }

    getAge() {
        return this.age;
    }

    tellMyName(){
        return `I am ${this.name}`
    }

    tellMyAge(){
        return `I am ${this.age}`
    }
       
  }

  thomas =  new Personne('John', 40);
  marc =  new Personne('Mary', 35);

  console.log(thomas.tellMyName() + ',' + thomas.tellMyAge());
  console.log(marc.tellMyName() + ',' + marc.tellMyAge());


  