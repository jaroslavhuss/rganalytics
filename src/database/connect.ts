import Mongoose from "mongoose";

export const Connection = async () => {
  return new Promise(async (res, rej) => {
    try {
      const connected = await Mongoose.connect(
        "mongodb://127.0.0.1:27017/analytics"
      );
      res(connected);
    } catch (error: any) {
      if (error) {
        rej(error.message);
      }
    }
  });
};
