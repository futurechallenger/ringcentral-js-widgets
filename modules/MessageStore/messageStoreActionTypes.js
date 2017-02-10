'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = require('../../lib/Enum');

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['init', 'initSuccess', 'reset', 'resetSuccess', 'sync', 'syncError', 'syncOver', 'saveConversations', 'saveMessages', 'saveSyncToken', 'cleanUp', 'updateUnreadCounts'], 'messageStore');
//# sourceMappingURL=messageStoreActionTypes.js.map
