const db  = require ('../../db/db'),
      jwt = require('jsonwebtoken');

exports.findOrCreateUser = function (userSteamID) {
  return db('users')
  .select('steamID', 'uid')
  .where('steamID', "=", userSteamID)
  .then(user => {
    if(user.length != 1){
      console.log("User not found, making a new one!");
      return db('users')
      .insert({ steamID : userSteamID }, ['uid', 'steamID']);
    }
    console.log("User found!");
    return [{ uid : user[0].uid, steamID : user[0].steamID }];
  })
}

exports.generateJWT = (payload) => {
 return jwt.sign(payload, 'testSecret123');
}

exports.getItemsByUsername = (username) => {
  return db('users')
    .where('username', '=', username)
    .select('uid')
    .then(result => {
      if(result.length != 1){
        res.json({message : "User not found, home boy!"}); //what the hell is this
      }else{
        return db('user_items')
        .where('user_id', '=', result[0].uid)
        .join('items', 'user_items.item', '=', 'items.iid')
        .leftOuterJoin('paints', 'user_items.paint', '=', 'paints.pid')
        .leftOuterJoin('certs', 'user_items.cert', '=', 'certs.cid')
        .select('items.name as name', 'paints.color as color', 'certs.type as cert', 'user_items.uiid as uiid')
      }
  })
}
          