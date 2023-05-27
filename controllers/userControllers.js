const { successResponses, badResponses } = require("../middleware/responses");
const errorResonses = require("../middleware/error-responses");
const USER = require("../models/userSchema");

exports.user = {
  get: async (req, res) => {
    try {
      const getUser = await USER.find({});
      if (getUser) {
        return successResponses(res, {
          data: getUser,
        });
      }
    } catch (error) {
      return errorResonses(error, req, res);
    }
  },
  add: async (req, res) => {
    try {
      const { firstName, lastName } = req.body;
      const users = {
        firstName: firstName,
        lastName: lastName,
      };
      const addedData = await USER.create(users);
      if (addedData) {
        return successResponses(res, {
          message: "Data added successfully",
        });
      } else {
        return badResponses(res, {
          message: "Data not add",
        });
      }
    } catch (error) {
      return errorResonses(error, req, res);
    }
  },
  update: async (req, res) => {
    try {
      const Data = await USER.findById({ _id: req.body.id });
      if (Data) {
        await USER.findOneAndUpdate(
          {
            _id: Data._id,
          },
          {
            $set: {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
            },
          }
        );
        return successResponses(res, {
          message: "Data updated successfully",
        });
      } else {
        return badResponses(res, {
          message: "Data not update",
        });
      }
    } catch (error) {
      return errorResonses(error, req, res);
    }
  },
  delete: async (req, res) => {
    try {
      await USER.findByIdAndRemove({ _id: req.query.id });

      return successResponses(res, {
        message: "Data deleted successfully",
      });
    } catch (error) {
      return errorResonses(error, req, res);
    }
  },
};
