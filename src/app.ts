import {Bevarage} from "./decorators/Bevarage";
import {AddonDecorator} from "./decorators/AddonDecorator";
import {Expresso} from "./components/Expresso";

class Caramel extends AddonDecorator {
    private bevarage: Bevarage;

    constructor(b: Bevarage) {
        super();
        this.bevarage = b;
    };

    public getCost(): number {
        return this.bevarage.getCost() + 1;
    }

    public getDescription(): string {
        return this.bevarage.getDescription() + " Caramel"
    }
}

const expresso = new Expresso();
console.log(expresso.getDescription(), expresso.getCost())
// Decorating with caramel for the first time;
const caramel1 = new Caramel(expresso);
console.log(caramel1.getDescription(), caramel1.getCost());
// Decorating with caramel for the second time;
const caramel2 = new Caramel(caramel1);
console.log(caramel2.getDescription(), caramel2.getCost());