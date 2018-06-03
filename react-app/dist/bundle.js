(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoryBox = function (_React$Component) {
    _inherits(StoryBox, _React$Component);

    function StoryBox() {
        _classCallCheck(this, StoryBox);

        return _possibleConstructorReturn(this, (StoryBox.__proto__ || Object.getPrototypeOf(StoryBox)).apply(this, arguments));
    }

    _createClass(StoryBox, [{
        key: 'render',
        value: function render() {
            var now = new Date();
            var topicsList = ['HTML', 'JavaScript', 'React'];

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h3',
                    null,
                    'Story Box'
                ),
                React.createElement(
                    'p',
                    { className: 'lead' },
                    'Current time: ',
                    now.toTimeString()
                ),
                React.createElement(
                    'ul',
                    null,
                    topicsList.map(function (topic) {
                        return React.createElement(
                            'li',
                            null,
                            topic
                        );
                    })
                )
            );
        }
    }]);

    return StoryBox;
}(React.Component);

// Encapusate previsouly declared Comment component
// Arguments passed to components are called props. They look similar to regular HTML element attributes.


var CommentBox = function (_React$Component2) {
    _inherits(CommentBox, _React$Component2);

    function CommentBox() {
        _classCallCheck(this, CommentBox);

        var _this2 = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this));

        _this2.state = {
            showComments: false,
            commentList: [{ id: 1, author: 'Anne Droid', body: 'I wanna know what love is ...' }, { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }]
        };
        return _this2;
    }

    _createClass(CommentBox, [{
        key: 'render',
        value: function render() {
            var comments = this._getComments();
            var commentNodes = void 0,
                buttonText = void 0;
            if (this.state.showComments) {
                buttonText = 'Hide comments';
                commentNodes = React.createElement(
                    'div',
                    { className: 'comment-list' },
                    comments
                );
            } else {
                buttonText = 'Show comments';
            }
            return React.createElement(
                'div',
                { className: 'comment-box' },
                React.createElement(CommentForm, { addComment: this._addComment.bind(this) }),
                React.createElement(
                    'h3',
                    null,
                    'Comments'
                ),
                React.createElement(
                    'h4',
                    { className: 'comment-count' },
                    this._getCommentsTitle(comments.length)
                ),
                React.createElement(
                    'button',
                    { onClick: this._handleClick.bind(this) },
                    buttonText
                ),
                commentNodes
            );
        }

        // New method that will return array of JSX elements

    }, {
        key: '_getComments',
        value: function _getComments() {

            return this.state.commentList.map(function (comment) {
                return React.createElement(Comment, {
                    author: comment.author,
                    body: comment.body,
                    key: comment.id
                });
            });
        }

        // handles the plural case in our title

    }, {
        key: '_getCommentsTitle',
        value: function _getCommentsTitle(commentCount) {
            if (commentCount === 0) {
                return 'No comments yet';
            } else if (commentCount === 1) {
                return '1 comment';
            } else {
                return commentCount + ' comments';
            }
        }

        // Add a button that will toggle the showComments state when a click event is fired

    }, {
        key: '_handleClick',
        value: function _handleClick() {
            this.setState({
                showComments: !this.state.showComments
            });
        }

        // Gets triggered by CommentForm when a new comment is added

    }, {
        key: '_addComment',
        value: function _addComment(athor, body) {
            var comment = {
                id: this.state.comments.length + 1,
                author: author,
                body: body
            };
            this.setState({
                // Update state when function is called by adding new comment
                // New array references help React stay fast. So concat works better then push here.
                comments: this.state.comments.concat([comment])
            });
        }
    }]);

    return CommentBox;
}(React.Component);

// The Comment component renders the markup for each comment, including its author and body.


var Comment = function (_React$Component3) {
    _inherits(Comment, _React$Component3);

    function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
    }

    _createClass(Comment, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'comment' },
                React.createElement(
                    'p',
                    { className: 'comment-header' },
                    this.props.author
                ),
                React.createElement(
                    'p',
                    { className: 'comment-body' },
                    this.props.body
                ),
                React.createElement(
                    'div',
                    { className: 'comment-footer' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'comment-footer-delete' },
                        'Delete comment'
                    )
                )
            );
        }
    }]);

    return Comment;
}(React.Component);

// CommentForm a new component that will allow users to add comments to our app


var CommentForm = function (_React$Component4) {
    _inherits(CommentForm, _React$Component4);

    function CommentForm() {
        _classCallCheck(this, CommentForm);

        return _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).apply(this, arguments));
    }

    _createClass(CommentForm, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'form',
                { className: 'comment-form'
                    /*
                    React warps the browser's native events into synthetic events,
                    consolidating browser behaviors into one API
                    */
                    , onSubmit: this._handleSubmit.bind(this) },
                React.createElement(
                    'label',
                    null,
                    'Join the discussuon'
                ),
                React.createElement(
                    'div',
                    { className: 'comment-form-fields' },
                    React.createElement('input', { placeholder: 'Name:'
                        /* React runs ref callbacks on render 
                            DOM elememt passed into callback
                            this refers to CommentForm
                        */
                        , ref: function ref(input) {
                            return _this5._author = input;
                        } }),
                    React.createElement('textarea', { placeholder: 'Comment:',
                        ref: function ref(textarea) {
                            return _this5._body = textarea;
                        }
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'comment-form-actions' },
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Post comment'
                    )
                )
            );
        }
    }, {
        key: '_handleSubmit',
        value: function _handleSubmit(event) {
            event.preventDefault();

            var author = this._author;
            var body = this._body;

            /* 
            1. This method has been passed as an argument(props)
            2. author and body are HTML elememt, use value property
            */
            this.props.addComment(author.value, body.value);
        }
    }]);

    return CommentForm;
}(React.Component);

ReactDOM.render(React.createElement(StoryBox, null), document.getElementById('story-app'));

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('comment-box'));

},{}]},{},[1]);
