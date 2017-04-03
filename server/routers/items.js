import { getItems, getUidByUsername } from '../utils/utils';

module.exports = (app, express, passport) => {
  const itemsRouter = express.Router();

  itemsRouter.get('/:username', (req, res) => {
    getUidByUsername(req.params.username)
    .then(result => {
      console.log(result)
      return getItems(result[0].uid);
    })
    .then(items => {
       res.json(items);
    });
  });

  itemsRouter.get('/', 
    passport.authenticate('jwt', { session : false }), 
    (req, res) => {
      getItems(req.user[0].uid)
      .then(items => {
        res.json(items);
      });
    });

  return itemsRouter;
}