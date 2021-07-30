/* function Saluer(nom: string) {
    console.log(`Bonjour ${nom}`);
} */

let nom: string = "Pauline";
let nb = 42;
// Saluer(nom);

/* function Saluer(personne: Person) {
    console.log(`Bonjour, je m'appele ${personne.Prenom} ${personne.Nom} et j'ai ${personne.Age} ans`);
} */




class Person implements IPerson {
    public Prenom: string;
    public Nom: string;
    public Age: number;
    public Gender: boolean;
    private _email: string;

    get Email() { return this._email }

    set Email(value: string) { this._email = value }

    constructor(prenom: string, nom: string, age: number, email: string) {
        this.Prenom = prenom;
        this.Nom = nom;
        this.Age = age;
        this._email = email;
    }

    public Saluer(): void {
        console.log(`Bonjour, je m'appele ${this.Prenom} ${this.Nom} et j'ai ${this.Age} ans`);
    }

    public DireBonjourA(person: IPerson): string {
        return `Heureux de vous rencontrer ${(person.Gender) ? 'M.' : 'Mme.'} ${person.Nom}`
    }

}

// objet classique issu d'un class
let p: Person = new Person("Toto", "To", 28, "toto@gmail.com");

// objet json issu d'un interface
let p2: IPerson = {
    Nom: "Tutu",
    Prenom: "Titi",
    Age: 32,
    Gender: true,
    Email: "tot@toto.com"
}

p.Saluer();

// Saluer(p);

interface IPerson {
    Prenom: string;
    Nom: string;
    Age: number;
    Gender: boolean;
    Email: string;
}

console.log(p.DireBonjourA(p2));
