class StoryBox extends React.Component {
    render() {
        const now = new Date();
        const topicsList = ['HTML', 'JavaScript', 'React'];

        return( <div>
                    <h3>Story Box</h3>
                    <p className = 'lead'>
                        Current time: {now.toTimeString()}
                    </p>
                    <ul>
                        {topicsList.map( topic => <li>{topic}</li>)}
                    </ul>
                </div>
            );
    }
}


// Encapusate previsouly declared Comment component
// Arguments passed to components are called props. They look similar to regular HTML element attributes.
class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            commentList: [
                { id: 1, author: 'Anne Droid', body: 'I wanna know what love is ...' },
                { id: 2, author: 'Bending Bender', body: 'Excellent stuff'}
            ]
        }
    }

    render() {
        const comments = this._getComments();
        let commentNodes, buttonText;
        if (this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div className = 'comment-list'>
                             {comments}
                           </div>;
        } else{
            buttonText = 'Show comments';
        }
        return(
            <div className = 'comment-box'>
                <CommentForm addComment = {this._addComment.bind(this)} />
                <h3>Comments</h3>
                <h4 className = 'comment-count'>
                    {this._getCommentsTitle(comments.length)}
                </h4>
                <button onClick = {this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        )
    }

    // New method that will return array of JSX elements
    _getComments() {

        return this.state.commentList.map((comment) => {
            return (<Comment
                        author = {comment.author}
                        body = {comment.body}
                        key = {comment.id} 
                    />)
        })
    }

    // handles the plural case in our title
    _getCommentsTitle(commentCount){
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else{
            return `${commentCount} comments`;
        }
    }

    // Add a button that will toggle the showComments state when a click event is fired
    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    // Gets triggered by CommentForm when a new comment is added
    _addComment(athor, body){
        const comment = {
            id : this.state.comments.length + 1,
            author,
            body
        };
        this.setState({
            // Update state when function is called by adding new comment
            // New array references help React stay fast. So concat works better then push here.
            comments: this.state.comments.concat([comment])
        });
    }
}


// The Comment component renders the markup for each comment, including its author and body.
class Comment extends React.Component {
    render() {
        return(
            <div className = "comment">
                <p className = "comment-header">{this.props.author}</p>
                <p className = "comment-body">
                    {this.props.body}
                </p>
                <div className = "comment-footer">
                    <a href = "#" className = "comment-footer-delete">
                    Delete comment
                    </a>
                </div>
            </div>
        );
    }
}

// CommentForm a new component that will allow users to add comments to our app
class CommentForm extends React.Component {
    render() {
        return (
            <form className = 'comment-form'
                /*
                React warps the browser's native events into synthetic events,
                consolidating browser behaviors into one API
                */
                onSubmit = {this._handleSubmit.bind(this)}>

                <label>NEW COMMENT</label>
                <div className = 'comment-form-fields'>
                    <input placeholder = 'Name:'
                        /* React runs ref callbacks on render 
                            DOM elememt passed into callback
                            this refers to CommentForm
                        */
                        ref = {
                            (input) => this._author = input
                        }/>
                    <textarea placeholder = 'Comment:'
                        ref = {
                            (textarea) => this._body = textarea
                        }
                    ></textarea>
                </div>
                <div className = 'comment-form-actions'>
                    <button type = 'submit'>
                        Post comment
                    </button>
                </div>
            </form>
        )
    }

    _handleSubmit(event) {
        event.preventDefault();

        let author = this._author;
        let body = this._body;

        /* 
        1. This method has been passed as an argument(props)
        2. author and body are HTML elememt, use value property
        */
        this.props.addComment(author.value, body.value);
    }
}


ReactDOM.render(
    <StoryBox />, document.getElementById('story-app')
);

ReactDOM.render(
    <CommentBox />, document.getElementById('comment-box')
);