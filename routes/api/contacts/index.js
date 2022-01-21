import { Router } from "express";
import {
  controllerListContacts,
  controllerGetContactById,
  controllerAddContact,
  controllerRemoveContact,
  controllerUpdateContact,
  controllerUpdateStatusContact,
} from "../../../controllers/contact";
import {
  validateCreate,
  validateUpdate,
  validateUpdateFavorite,
  validateId,
  validateQuery,
} from "../../../middlewares/validation/validation";

const router = new Router();

router.get("/", validateQuery, controllerListContacts);

router.get("/:id", validateId, controllerGetContactById);

router.post("/", validateCreate, controllerAddContact);

router.delete("/:id", validateId, controllerRemoveContact);

router.put("/:id", validateId, validateUpdate, controllerUpdateContact);

router.patch(
  "/:id/favorite",
  validateId,
  validateUpdateFavorite,
  controllerUpdateStatusContact
);

export default router;