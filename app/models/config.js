const twitter = require('twitter-lite');

exports.newClient = function (subdomain = 'api') {
    return new twitter({
        subdomain,
        consumer_key: 'ZJZ1H35oHWgZmLYduWqcJaVrX',
        consumer_secret: 'wNv4JnFg87OWWlMq8sWX2PJ8Xo5LFQ6jsEsoTyj7b8FPkhTFid',
        access_token_key: '733999009531056128-Zu6EwHUe8vAtGO0gj3v0teIpVZ4YP0z',
        access_token_secret: 'wJ0varT6LGwsnYloMHtnXpD7KzM014eZ6HOrbQQjGyGaE',
        bearer_token: 'AAAAAAAAAAAAAAAAAAAAACTiDAEAAAAAwFZdnROK%2FGRGE0R5FN5mPCNq6u8%3Dqp6iVV1yO5ipx1MEcr8vJF3uBGfDRb58yWak7x1zTstIsSpvK3'
    });
}