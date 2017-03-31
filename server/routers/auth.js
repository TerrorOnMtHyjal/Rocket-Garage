const findOrCreateUser = require('../utils/utils').findOrCreateUser;

module.exports = (app, express, passport) => {
  const authRouter = express.Router();

  authRouter.get('/', 
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  authRouter.get('/return', 
    passport.authenticate('steam', { failureRedirect: '/'}),
    (req, res) => {
      const userSteamID = req.user._json.steamid;

      async function getUser () {
        return findOrCreateUser(userSteamID)  
      }
      
      getUser().then(user => {
        console.log(user)
        const payload = result[0];
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.cookie('accessToken', token);
        res.cookie('uid', payload.uid);
        res.redirect(`/`);
      });
    }
  );

  return authRouter;
}