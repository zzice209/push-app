var push = require('web-push')

let vapidKeys = {
    publicKey: 'BN1lQesf-PDGj5DzenTupOOCV5_l35Zbc63wvlPxJS84gT3HgfYbImwo7MGUJiyP2l9iyX6ZEkRC86DlJbwFMBM',
    privateKey: 'g9WPgD6_FEuRzyDMyt6TDSRD0PVLVD63aAY28VS3fjI'
}

push.setVapidDetails('mailto:test@somewhere', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/foq3QaTICGY:APA91bHoP8D7GZVS57F614hcBEN8WrGdwEuZBHIWvLCQrrynB3lRWgS_RVN1TV43Be1IMJYWTgafxa4hECOvKgK47pHJGu8CAHvD_QZ929GVaKjuUnTZP3oBJQS9ovzbYQT8_7tWIo2t", "expirationTime": null,
    keys: {
        p256dh: "BPKW_bkS62k2Yk1s3A5eHvtGWjjKjml8v8PnY_y0xal_sp9neexOTTLYpHen3CIBui3SioTf1m1HqZCv65L4pzA",
        auth: "BPP9rIkNBWvlVqJCp7t-rw"
    }
}
push.sendNotification(sub, 'test message')