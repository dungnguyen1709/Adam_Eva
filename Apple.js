let Apple = function () {

    this.getWeight = function () {
        return this.weight;
    }
    this.decreaseWeight = function () {
            this.weight--;
        }

        this.isEmpty = function () {
        if (this.weight <= 0) {
            return true;
        } else {
            return false;
        }

        }
}