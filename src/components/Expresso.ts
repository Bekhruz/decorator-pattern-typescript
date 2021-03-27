import {Bevarage} from "../decorators/Bevarage";

export class Expresso extends Bevarage{
    getCost(): number {
        return 2;
    }

    getDescription(): string {
        return "Expresso";
    }

}