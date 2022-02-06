
import { HttpCode } from "../../lib/constants";
import {
  LocalStorage,
  FileStorage,
  CloudStorage,
} from "../../service/file-storage";

const uploadAvatar = async (req, res, next) => {
  const fileStorage = new FileStorage(LocalStorage, req.file, req.user); 

  const avatarUrl = await fileStorage.updateAvatar();
  res
    .status(HttpCode.OK)
    .json({ status: "success", code: HttpCode.OK, data: { avatarUrl } });
};

export default uploadAvatar;