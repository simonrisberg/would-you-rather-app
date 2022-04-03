import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PollDetails from "./PollDetails";
import PollResult from "./PollResult";

class PollDecider extends Component {

    render() {

        const { answeredQuestionids, qid, question, author} = this.props

        if(!question) {
            return <Redirect to='/404' />
        }

        return (
            <div>
                {answeredQuestionids.indexOf(qid) !== -1 ? <PollResult question={question} author={author} /> : <PollDetails id={qid}/>}
            </div>
        )
    }

   
}

function mapStateToProps({ authedUser, users, questions }, props) {
        
    const { id } = props.match.params

    const loggedInUser = users[authedUser]

    const question = questions[id]

    const author = question ? users[question.author] : null

    const answeredQuestionids = Object.keys(loggedInUser.answers);

    return {
        answeredQuestionids: answeredQuestionids,
        qid: id,
        question: question,
        author: author,
    }
}

export default connect(mapStateToProps)(PollDecider)