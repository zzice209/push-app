var push = require('web-push')

let vapidKeys = {
    publicKey: 'BN1lQesf-PDGj5DzenTupOOCV5_l35Zbc63wvlPxJS84gT3HgfYbImwo7MGUJiyP2l9iyX6ZEkRC86DlJbwFMBM',
    privateKey: 'g9WPgD6_FEuRzyDMyt6TDSRD0PVLVD63aAY28VS3fjI'
}

push.setVapidDetails('mailto:test@somewhere', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'test message')