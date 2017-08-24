'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MultiCallAnswerButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Answer = require('../../assets/images/Answer.svg');

var _Answer2 = _interopRequireDefault(_Answer);

var _Hold = require('../../assets/images/Hold.svg');

var _Hold2 = _interopRequireDefault(_Hold);

var _End = require('../../assets/images/End.svg');

var _End2 = _interopRequireDefault(_End);

var _CircleButton = require('../CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MultiCallAnswerButton(props) {
  var Icon = props.isEndOtherCall ? _End2.default : _Hold2.default;
  var iconClassName = (0, _classnames2.default)(_styles2.default.button, props.isEndOtherCall ? _styles2.default.endButton : '');
  return _react2.default.createElement(
    'svg',
    {
      className: props.className,
      viewBox: '0 0 500 500',
      width: props.width,
      height: props.height,
      x: props.x,
      y: props.y
    },
    _react2.default.createElement(_CircleButton2.default, {
      width: '160',
      height: '160',
      x: 120,
      y: 40,
      className: iconClassName,
      onClick: props.onClick,
      icon: Icon
    }),
    _react2.default.createElement(_CircleButton2.default, {
      width: '190',
      height: '190',
      x: 220,
      y: 80,
      className: (0, _classnames2.default)(_styles2.default.button, _styles2.default.answer),
      showBorder: false,
      onClick: props.onClick,
      icon: _Answer2.default
    }),
    _react2.default.createElement(
      'text',
      {
        className: _styles2.default.buttonTitle,
        x: '250',
        y: '405',
        textAnchor: 'middle'
      },
      props.title
    )
  );
}

MultiCallAnswerButton.propTypes = {
  title: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  isEndOtherCall: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  x: _propTypes2.default.number,
  y: _propTypes2.default.number
};

MultiCallAnswerButton.defaultProps = {
  className: null,
  isEndOtherCall: true,
  width: '100%',
  height: '100%',
  x: 0,
  y: 0
};
//# sourceMappingURL=index.js.map
