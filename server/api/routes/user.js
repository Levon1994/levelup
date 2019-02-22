const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require('../../config');

function encryptPassword(password) {
  return crypto.createHmac('sha256', config.app.secret)
      .update(password)
      .digest('hex');
}

const User = require("../models/user");

router.post("/signup", (req, res, next) => {
  const {email, password} = req.body;
  User.find({ email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        const hash = encryptPassword(password);
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
        });
        user
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "User created"
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
      }
    });
});

router.post("/login", (req, res, next) => {
    const {email, password} = req.body;
    User.find({ email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      console.log(user);
      if (user[0].password === encryptPassword(password)) {
          const token = jwt.sign(
              {
                  email: user[0].email,
                  userId: user[0]._id
              },
              config.app.JWT_KEY,
              {
                  expiresIn: "1h"
              }
          );

          return res.status(200).json({
              message: "Auth successful",
              token: token,
              userId: user[0]._id,
              auth: true
          });

      } else {
          return res.status(401).json({
              message: "Auth faileding"
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/getuser", (req, res, next) => {
    const { token } = req.body;

    const legit = jwt.verify(
        token,
        config.app.JWT_KEY,
        {
            expiresIn: "1h"
        }
    );
    const { email, userId } = legit;

    User.find({ email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth faileding"
                });
            }
            if (JSON.stringify(user[0]._id).split('"')[1] === userId) {
                return res.status(200).json({
                    message: "Auth successful",
                    auth: true
                });

            } else {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
