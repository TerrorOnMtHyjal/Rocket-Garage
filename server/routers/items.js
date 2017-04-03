import { getItems, getUidByUsername } from '../utils/utils';

module.exports = (app, express, passport) => {
  const itemsRouter = express.Router();

  itemsRouter.get('/:username',
    passport.authenticate('jwt', { session : false }), 
    (req, res) => { 
      getUidByUsername(req.params.username)
      .then(result => {
        const uid = result[0].uid;
        return getItems(uid);
      })
      .then(items => {
        res.json(items);
      });
    }
  );

  itemsRouter.get('/', 
    passport.authenticate('jwt', { session : false }), 
    (req, res) => {
      getItems( res.user[0].uid )
      .then(items => {
        res.json(items);
      });
    }
  );

  return itemsRouter;
}