var permission = {}
permission.PUBLISH = "publish";
permission.SUBSCRIBE = "subscribe";
permission.RECORD = "record";
permission.SUPPRESS_EVENTS = 'suppress-events';

permission.event = {};
permission.event['onAddUser'] = 'user-added';

/*Not used, but still there just in case*/
permission.DATA = "data";
permission.AUDIO = "audio";
permission.VIDEO = "video";
permission.SCREEN = "screen";

module.exports = permission;
