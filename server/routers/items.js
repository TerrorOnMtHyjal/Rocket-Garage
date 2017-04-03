import { getItemsByUsername } from '../utils/utils';

module.exports = (app, express, passport) => {
  const itemsRouter = express.Router();

  itemsRouter.get('/:username',
    passport.authenticate('jwt', { session : false }), 
    (req, res) => { 
    getItemsByUsername(req.params.username).then(items => {
      res.json(items);
    });
  });

  itemsRouter.get('/', 
    passport.authenticate('jwt', { session : false }), 
    (req, res) => {
      db('user_items')
      .where("user_id", "=", req.user[0].uid)
      .join('items', 'user_items.item', '=', 'items.iid')
      .leftOuterJoin('paints', 'user_items.paint', '=', 'paints.pid')
      .leftOuterJoin('certs', 'user_items.cert', '=', 'certs.cid')
      .select('items.name as name', 'paints.color as color', 'certs.type as cert')
      .then(items => {
        res.status(200);
        res.json(items);
      });
    }
  );

  return itemsRouter;
}