const Realm = require('realm')
const schema = require('./CloudRealm');

let adminUser = 'admindemobsc';
let adminPass = 'V4zPU8FjL6kAf_X';
const authUrl = 'https://demobsc.us1a.cloud.realm.io/';
let creds = Realm.Sync.Credentials.usernamePassword(adminUser, adminPass);

const configuration = {
    sync: {
      fullSynchronization: true,
      url: 'realms://demobsc.us1a.cloud.realm.io/DemoNFC7',
    },
    schema
  };


  
Realm.Sync.User.login(authUrl, creds).then(user => {
    let config = user.createConfiguration(configuration);
        Realm.open(config).then((realm) => {
        }).catch(error =>{
            console.log(JSON.stringify('error => ' + error.message,null,4))
        });

}).catch(error => {
    console.log(JSON.stringify('error => : '+error,null,4))
})
