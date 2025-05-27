class User {
  constructor({ id, name, consentToShare }) {
    this.id = id;
    this.name = name;
    this.consentToShare = consentToShare;
  }
}

module.exports = User;