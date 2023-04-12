const router = require("express").Router();

const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth.js");

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

// // GET /api/set-token-cookie
// const { User } = require("../../db/models");
// router.get("/set-token-cookie", async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: "Demo-lition",
//     },
//   });
//   setTokenCookie(res, user);
//   return res.json({ user: user });
// });

// // GET /api/restore-user
// router.use(restoreUser);

// router.get("/restore-user", (req, res) => {
//   return res.json(req.user);
// });

// // GET /api/require-auth
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });

router.use(restoreUser);

module.exports = router;
