class CreateInstitution {
  constructor(institutionRepository) {
    this.institutionRepository = institutionRepository;
  }

  async execute(data) {
    return this.institutionRepository.create(data);
  }
}

module.exports = CreateInstitution;