import { findOrCreateUser, generateJWT } from '../utils/utils';

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
      findOrCreateUser(req.user._json.steamid).then(user => {
        console.log(user);
        const payload = user[0];      
        res.cookie('accessToken', generateJWT(payload));
        res.redirect(`/edit`);
      });
    }
  );

  return authRouter;
}