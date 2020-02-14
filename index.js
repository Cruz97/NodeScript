const Realm = require('realm')
const schema = require('./CloudRealm');

class RealmObject {
    constructor(realm) {
      this.realm = realm;
    }
}
console.log('schema: '+ JSON.stringify(schema,null,4))
//const authUrl = 'https://demobsc.us1a.cloud.realm.io/DemoBSC';
let adminUser = 'admindemobsc';
let adminPass = 'V4zPU8FjL6kAf_X';
const authUrl = 'https://demobsc.us1a.cloud.realm.io/';
let creds = Realm.Sync.Credentials.usernamePassword(adminUser, adminPass); // createUser = true
//let creds = Realm.Sync.Credentials.usernamePassword('admindemobsc', 'V4zPU8FjL6kAf_X') // createUser = true

const configuration = {
    sync: {
      fullSynchronization: true,
      url: 'realms://demobsc.us1a.cloud.realm.io/Demo14',
    },
    schema
  };


  
Realm.Sync.User.login(authUrl, creds).then(user => {
    //console.log(user.token)
    //let config = user.createConfiguration(configuration);
    //console.log(config)
    //Realm.deleteFile(config)
    //Realm.deleteModel('AppImage')
    let config = user.createConfiguration(configuration);
        Realm.open(config).then((realm) => {
            //Realm.deleteFile(config)
            //ßrealm.syncSession.pause()
        }).catch(error =>{
            console.log(JSON.stringify('error => ' + error.message,null,4))
        });

}).catch(error => {
    console.log(JSON.stringify('error => : '+error,null,4))
}).finally(()=>{
   
});


//console.log('hello world')