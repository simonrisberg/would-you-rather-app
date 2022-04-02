import { Component } from "react";
import { connect } from "react-redux";
import PollDetails from "./PollDetails";
import PollResult from "./PollResult";

class PollDecider extends Component {

    render() {

        const { answeredQuestionids, qid, question, author} = this.props

        console.log("ANSWERED QUESTIONS", answeredQuestionids)
        console.log("QUESTION ID", qid)

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

    const author = users[question.author]

    const answeredQuestionids = Object.keys(loggedInUser.answers);

    return {
        answeredQuestionids: answeredQuestionids,
        qid: id,
        question: question,
        author: author,
    }
}

export default connect(mapStateToProps)(PollDecider)