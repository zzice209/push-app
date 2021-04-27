var push = require('web-push')

let vapidKeys = {
    publicKey:
        'BN1lQesf-PDGj5DzenTupOOCV5_l35Zbc63wvlPxJS84gT3HgfYbImwo7MGUJiyP2l9iyX6ZEkRC86DlJbwFMBM',
    privateKey: 'g9WPgD6_FEuRzyDMyt6TDSRD0PVLVD63aAY28VS3fjI'
}

// VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();
push.setVapidDetails(
    'mailto:test@code.co.uk',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let sub = {
    endpoint:
    'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABghkZU1SBeXrYd6T7D2cLflTUxH0IUL478v4yd_ShLuM3O9wNBhF6mkuXCFRyyu1_47ZaJub-p4DTeaq3pD2qCLJEDsep6sV5St_YMu_yQt8K5ddLm6XqaulGSnaCsKJARDv_8K_umhWKzq8R6e2Ok1zJ8pQvyqw2dxbgCu3ZDwZWLhl8',
    expirationTime: null,
    keys: {
        p256dh:
        'BK2IQtxEqtxT0EejmBS3-9RG6zBv9w-As4K96N0ls1dnSBrtDVAFNRaoRTHkLvS5PrFx6DdrWGcyUByOVCbBtpU',
        auth: 'RjOjjGNMFIEP3p-gy38MRw'
    }
};

push.sendNotification(sub, 'test message')