
let Human = function () {
    this.isMale = function () {
        if (this.gender === 'man') {
            return true;
        } else {
            return false;
        }
    }

    this.setGender = function (gender) {
        this.gender = gender;
    }

    this.checkApple = function (apple) {
        return apple.weight;
    }

    this.eat = function (apple) {
        apple.decreaseWeight();
        this.weight++;
    }

    this.say = function (string) {
        document.write(this.name + " : " + string + "<br>");
    }

    this.getName = function () {
        return this.name;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.setWeight = function (weight) {
        this.weight = weight;

    }


}








