class Key {
    private signature: number = Math.random();
    
    public getSignature(): number {
        return this.signature;
    };
};

class Person {
    constructor(public key: Key) { };

    public getKey(): Key {
        return this.key;
    };
};

abstract class House {
    private tenants: Person[] = [];
    public door: boolean = false;

    constructor(public key: Key) { }

    public comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant);
        };
    };

    abstract openDoor(info: Key);
};

class MyHouse extends House {
     openDoor(info): void {
        if (info.getSignature() === key.getSignature()) {
            this.door = true;
         };
    };
};

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};