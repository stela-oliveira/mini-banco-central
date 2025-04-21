class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    return this.userRepository.create(data);
  }
}

module.exports = CreateUser;