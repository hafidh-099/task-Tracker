const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller")

router.get('/',taskController.getAllTask);
router.get('/add',taskController.getAddform);
router.post('/add',taskController.postAddData);
router.get('/edit/:id',taskController.editData);
router.post('/edit',taskController.postUpdateData);
router.get('/delete/:id',taskController.deleteTask);

module.exports = router;
