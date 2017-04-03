import { getStores, getUidByUsername } from '../utils/utils';

module.exports = (app, express, passport) => {
  const storeRouter = express.Router();

  storeRouter.get('/:username', (req, res) => {
    getUidByUsername(req.params.username)
    .then(result => {
      return getStores(result[0].uid);
    })
    .then(stores => {
      console.log(stores)
      res.json(stores);
    });
  });

  storeRouter.get('/', 
    passport.authenticate('jwt', { session : false }), 
    (req, res) => {
      getStores(req.user[0].uid)
      .then(stores => {
        console.log(stores);
        res.json(stores);
      });
    });

  return storeRouter;
}