class InstitutionController {
  constructor(createInstitution) {
    this.createInstitution = createInstitution;
  }

  async create(req, res) {
    const institution = await this.createInstitution.execute(req.body);
    res.status(201).json(institution);
  }
}

module.exports = InstitutionController;