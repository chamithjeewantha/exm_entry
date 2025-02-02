import express from "express";
import {
  getAllStudents,
  getAllManagers,
  updateStudent,
  updateManager,
  getAllHods,
  getAllDeans,
  getManagerById,
  deleteUser,
  getNoOfManagers,
  getNoOfStudents,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/getAllStudents", getAllStudents);
router.get("/getAllManagers", getAllManagers);
router.post("/getManagerById", getManagerById);
router.put("/updateStudent", updateStudent);
router.put("/updateManager", updateManager);

router.get("/getAllHods", getAllHods);
router.get("/getAllDeans", getAllDeans);

router.delete("/deleteUser", deleteUser);

router.get("/getNoOfManagers", getNoOfManagers);
router.get("/getNoOfStudents", getNoOfStudents);
export default router;
