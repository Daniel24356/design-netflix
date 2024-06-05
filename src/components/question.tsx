import Button from "../props/button"
import '../style/question.css'
   
   function Question(){
    return (
        <>
        <div className="question-cont">
            <h2 className="freq-text">Frequently Asked Questions</h2>
            <div className="question-box">
                <div className="question-indiv">
                    <h3 className="what-text">What is Netflix?</h3>
                </div>
                <div className="question-indiv">
                    <h3 className="what-text">How much does Netflix cost?</h3>
                </div>
                <div className="question-indiv" >
                    <h3 className="what-text">Where can I watch?</h3>
                </div>
                <div className="question-indiv">
                    <h3 className="what-text">How do I cancel?</h3>
                </div>
                <div className="question-indiv">
                    <h3 className="what-text">What can I watch on Netflix?</h3>
                </div>
                <div className="question-indiv" >
                    <h3 className="what-text">Is Netflix good for kids?</h3>
                </div>
            </div>
            <div className="ready-cont">
                <p className="ready-text">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-get">
                <input className='input-as' placeholder="Email address" type="email" />
                <Button label="Get Started" color="secondary" />
                </div>
            </div>
        </div>
        </>
    )
   }

   export default Question

