const DesenhoModel = require('../Models/DesenhoModel');

class DesenhosRepository {
  async findAll() {
    const Desenhos = await DesenhoModel.find();
    return Desenhos;
  }

  async findById(id) {
    const Desenhos = await DesenhoModel.findById(id);
    return Desenhos;
  }

  async delete(id) {
    const desenho = await DesenhoModel.findByIdAndDelete(id);
    return desenho;
  }

  async create({ name, type, category_id, }) {
    const createdDesenho = await DesenhoModel.create({
      name,
      type,
      category_id,
    });
    return createdDesenho;
  }

  async update(id, { name, type, category_id, }) {
    try{
        const updatedDesenho = await DesenhoModel.findByIdAndUpdate(id, {
          name,
          type,
          category_id,
        });
        return updatedDesenho;
    } catch (error) {
      return response.status(400).json({ error: 'Não foi possivel Realizar o update' });
    }
  }
  async findByName({ name }) {
    const desenho = await DesenhoModel.findOne({ name });
    return desenho;
  }
}

module.exports = new DesenhosRepository();
