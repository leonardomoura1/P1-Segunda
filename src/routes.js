const { Router } = require('express');
const DesenhoController = require('./app/controllers/DesenhoController');
const router = Router();

router.get('/desenhos', DesenhoController.index);
router.post('/desenhos-inserir', DesenhoController.store);
router.get('/desenhos-buscar/:id', DesenhoController.show);
router.put('/desenhos-update/:id', DesenhoController.update);
router.delete('/desenhos-deletar/:id', DesenhoController.delete);

module.exports = router;
