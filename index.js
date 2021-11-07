// Your code here
class cat {
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }
}

speak() {
    return `${this.name} says meow!`
}

class dog {
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }
}

speak() {
    return `${this.name}says woof!`
}

class bird{
    constructor(name,sex) {
        this.name = name
        this.sex = sex
    }
}

speak () {
    (if this.sex === 'male'){
        return `its me ${this.name}is the parrot`
    }else {
        return `${this.name} says sqwak!`
    }
}