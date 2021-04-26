var push = require('web-push')

let vapidKeys = {
    publicKey:
        'BN1lQesf-PDGj5DzenTupOOCV5_l35Zbc63wvlPxJS84gT3HgfYbImwo7MGUJiyP2l9iyX6ZEkRC86DlJbwFMBM',
    privateKey: 'g9WPgD6_FEuRzyDMyt6TDSRD0PVLVD63aAY28VS3fjI'
}

push.setVapidDetails(
    'mailto:test@code.co.uk',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let sub = {
    endpoint:
    'https://fcm.googleapis.com/fcm/send/eyJplUG2Sfk:APA91bFHkSat_akHPMY2NXBBIiHS71muhRXfTPI4hqMngJsJVNCrXb-2hFthxMWfzACct9rc0OhAdpeMfWLwoCIj3XPaz0muelHNo3IoS04dt5WWS8H6W-pHeuotX222EjqLMcIzhqvg',
    expirationTime: null,
    keys: {
        p256dh:
        'BNINlO24BIdTQo_MkBqDtU3DlkrfkB2Grfl42l8GcS8ZkroBIn-MdUQ1cRZcJ9fpH5CcZrYRXcOVKuoSLn8ywSY',
        auth: 'QGurSwdGeVDVQxfcov5leA'
    }
};

push.sendNotification(sub, 'test message')