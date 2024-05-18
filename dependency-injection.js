class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async getUsers() {
    const users = await this.userRepository.getUsers();
    return users;
  }
  async addUser(user) {
    await this.userRepository.addUser(user);
  }
}

class UserRepository {
  async getUsers() {
    // get users from database
  }
  async addUser(user) {
    // add user to database
  }
}

class NewUserRepository {
  async getUsers() {
    // get users from database
  }
  async addUser(user) {
    // add user to database
  }
}

// Creating instances of the classes
const userRepository = new UserRepository();
const NEWuserRepository = new NewUserRepository();

const userService = new UserService(NEWuserRepository);
// Using the userService object to get and add users
userService.getUsers();
userService.addUser({ name: "John", age: 25 });
