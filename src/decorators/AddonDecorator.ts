import {Bevarage} from "./Bevarage";

// Decorators will have "has a" relation with Abstract
// class as well as "is a" relation in Case  AddonDecorator
// is having composition and inheritance at the same time

export abstract class AddonDecorator extends Bevarage {
    public abstract getCost(): number;
    public abstract getDescription(): string;
}