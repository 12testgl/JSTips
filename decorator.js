class User {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`User: ${this.name}`);
  }
}

class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name; // Ensures interface stays the same
    this.street = street;
    this.city = city;
  }
  say() {
    console.log(`Decorated User: ${this.name}, ${this.street}, ${this.city}`);
  }
}

const user = new User("Kelly");
user.say();

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.say();
