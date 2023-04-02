const DesenhosRepository = require('../repositories/DesenhosRepository');

class DesenhoController {
  async index(request, response) {
    const Desenhos = await DesenhosRepository.findAll();
    
    if (Desenhos.length === 0) {
      
      return response.status(404).json({ error: 'Não temos Nenhum Monstro de Desenho em nosso banco' });
    }

    response.json(Desenhos);
  }

  async show(request, response) {
    try{
      const { id } = request.params;
      const Desenho = await DesenhosRepository.findById(id);

      if (!Desenho) {
        return response.status(404).json({ error: 'Monstro de Desenho não encontrado' });
      }

      response.json(Desenho);

    } catch (error) {

      return response.status(400).json({ error: 'Id inválido' });
    }
  }

  async store(request, response) {
    const { name, type, category_id } = request.body;
    const desenhoExists = await DesenhosRepository.findByName({name});

    if (desenhoExists) {

      return response.status(400).json({ error: "Ja existe um monstro com esse nome" })
    }

    if (!name || !type || !category_id) {

      return response.status(400).json({ error: "Todos os dados devem ser Preenchidos" })
    }

    const Desenho = await DesenhosRepository.create({
      name, type, category_id,
    });

    response.json(Desenho);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, type, category_id } = request.body;
    const DesenhoExists = await DesenhosRepository.findById(id);

    if (!DesenhoExists) {
      return response.status(404).json({ error: "Não existe monstro de desenho com esse id cadastrado" });
    }

    if (!name || !type || !category_id) {
      return response.status(400).json({ error: "Todos os dados precisam ser preenchidos ou válidos" });
    }

    const Desenho = await DesenhosRepository.update(id, {
      name, type, category_id
    });

    response.status(200).json({message:"Monstro de desenho atualizado com sucesso!"});
  }

  async delete(request, response) {
    try{
        const { id } = request.params;
        const Desenho = await DesenhosRepository.findById(id);

        if (!Desenho) {
          return response.status(403).json({ error: "Monstro de desenho não encontrado" });
        }

        const desenhoDelete = await DesenhosRepository.delete(id);

        return response.status(200).json({message:"Monstro de desenho deletado com sucesso!"});

    } catch (error) {

      return response.status(400).json({ error: 'Erro Não foi possivel deletar' });
    }
  }
}

module.exports = new DesenhoController();
