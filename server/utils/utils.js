const nest = require('nesthydrationjs')();

const db  = require ('../../db/db'),
      jwt = require('jsonwebtoken');

const storeDefinition = [{
  header : 'header',
  subheader : 'subheader',
  platform : 'platform',
  primaryStore : 'primaryStore',
  items : [{
    name : 'name',
    color : 'color',
    cert : 'cert',
    uiid : 'uiid',
    itemType : 'itemType',
    postType : 'postType'
  }]
}];

exports.findOrCreateUser = (userSteamID) => {
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

exports.getUidByUsername = (username) => {
  return db('users')
    .where('username', '=', username)
    .select('uid')
}

exports.getItems = (uid) => {
  return db('user_items')
  .where('user_id', '=', uid)
  .join('items', 'user_items.item', '=', 'items.iid')
  .leftOuterJoin('paints', 'user_items.paint', '=', 'paints.pid')
  .leftOuterJoin('certs', 'user_items.cert', '=', 'certs.cid')
  .select('items.name as name', 'paints.color as color', 'certs.type as cert', 'user_items.uiid as uiid')
}

exports.getStores = (uid) => {
  return db('stores')
  .where('stores.user_id', '=', uid)
  .join('user_items', 'user_items.store_id', '=', 'stores.sid')
  .join('items', 'user_items.item', '=', 'items.iid')
  .leftOuterJoin('paints', 'user_items.paint', '=', 'paints.pid')
  .leftOuterJoin('certs', 'user_items.cert', '=', 'certs.cid')
  .select('stores.header as header', 'stores.subheader as subheader', 'stores.platform as platform', 'stores.primaryStore as primaryStore', 
          'items.name as name', 'paints.color as color', 'certs.type as cert', 'user_items.uiid as uiid', 'items.type as itemType', 'user_items.postType as postType')
  .then(data => nest.nest(data, storeDefinition))
}           