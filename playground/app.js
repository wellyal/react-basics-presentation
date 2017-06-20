class Pessoa {
  constructor(name, age) {
    this.personName = name
    this.personAge = age
  }

  doStuff () {
    console.log('doing unecessary stuffs')
  }

  sleep () {
    console.log(`${this.personName} is sleeping`)
  }

  get name () {
    return `My name is ${this.personName}`
  }

  set name (name) {
    this.personName = name
  }

  get age () {
    return `My age is ${this.personAge}`
  }

  set age (age) {
    this.personAge = age
  }
}

/*=====================================
=            Class Section            =
=====================================*/

const pessoa = new Pessoa('Wellyngton', 26)
console.log(pessoa.name)
console.log(pessoa.age)

pessoa.doStuff()

pessoa.name = "Tibas"
pessoa.age = 22
console.log(pessoa.name)
console.log(pessoa.age)

pessoa.sleep()

/*=====  End of Class Section  ======*/


/*===============================================
=            Arrow Functions Section            =
===============================================*/

const doSomething = function() {
  this.someone = 'Tibas'

  return {
    someone: 'Wellyngton',
    doExercise: function() {
      console.log(this.someone + ' is workingout')
    }
  }
}

doSomething().doExercise()

/*=====  End of Arrow Functions Section  ======*/


/*============================================================
=            Rest - Destructuring and Structuring            =
=============================================================*/

const abstractObject = {
  foo: 'bar',
  bar: 'foo',
  foobar: 'foobar'
}

const doSomethingElse = ({ foo }) => {
  console.log(foo)
}

doSomethingElse(abstractObject)

const { foobar } = abstractObject
console.log(foobar)

/*=====  End of Rest - Destructuring and Structuring  ======*/

