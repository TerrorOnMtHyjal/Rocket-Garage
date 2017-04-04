import { getGarages, getUidByUsername } from '../utils/utils';

module.exports = (app, express, passport) => {
  const garagesRouter = express.Router();

  garagesRouter.get('/:username', (req, res) => {
    getUidByUsername(req.params.username)
    .then(result => {
      return getGarages(result[0].uid);
    })
    .then(garages => {
      res.json(garages);
    });
  });

  garagesRouter.get('/', 
    passport.authenticate('jwt', { session : false }), 
    (req, res) => {
      getGarages(req.user[0].uid)
      .then(garages => {
        res.json(garages);
      });
    });

  return garagesRouter;
}