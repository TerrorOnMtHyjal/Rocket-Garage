import { getGarages, getUidByUsername } from '../utils/utils';

module.exports = (app, express, passport) => {
  const garagesRouter = express.Router();

  garagesRouter.get('/:username', (req, res) => {
    getUidByUsername(req.params.username)
    .then(result => {
      return getGarages(result[0].uid);
    })
    .then(garageDetails => {
      const garages = garageDetails[0].garages;
      const ownerDetails = garageDetails[0].owner_details;
      const formattedGarages = {
        ownerDetails,
        garages : {}
      };

      garages.forEach(({ gid, header, subheader, platform, primaryGarage, items }) => {
        formattedGarages.garages[gid] = {
          header,
          subheader,
          platform,
          primaryGarage,
          items
        }
      });
      res.json(formattedGarages);
    });
  });

  return garagesRouter;
}