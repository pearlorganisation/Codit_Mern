import mongoose from "mongoose";

export const validateMongodbID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) throw new Error("This is not a valid Mongodb ID");
};
