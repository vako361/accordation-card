import { useState } from 'react'
import "./App.css"
import "./index.css"

export default function App() {
  const [num, setNum] = useState(0);
  let active = null;
  const index = [1, 2, 3, 4, 5]
  const indexArr = index.map(acc => acc)
 
  return (
   <>
      <main>
        <div className="logos">
        <img className="logo" src="./img/illustration-woman-online-mobile.svg" alt="illustration-woman-online-mobile" />
        </div>

        <div className="for-direction">
          <h1>FAQ</h1>

          <div className="wrapper" >
            <div className="question-answer">
              <p className="question" onClick={ () => num == 1 ? setNum(null) : setNum(1)}>How many team members can I invite?</p>
              {num == 1 &&<p className="answer"  >You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>}
            </div>
            <img src="./img/icon-arrow-down.svg" alt="arrow" className="arrow" />
          </div>

          <div className="wrapper">
            <div className="question-answer">
              <p className="question" onClick={() => num == 2 ? setNum(null) : setNum(2) }>What is the maximum file upload size?</p>
             { num == 2 &&<p className="answer">No more than 2GB. All files in your account must fit your allotted storage space.</p>}
            </div>
            <img src="./img/icon-arrow-down.svg" alt="arrow" className="arrow" id="click" />
          </div>

          <div className="wrapper">
            <div className="question-answer">
              <p className="question" onClick={() => num == 3? setNum(null) : setNum(3)}>How do I reset my password?</p>
             { num == 3 &&<p className="answer" >Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>}
            </div>
            <img src="./img/icon-arrow-down.svg" alt="arrow" className="arrow" />
          </div>

          <div className="wrapper">
            <div className="question-answer">
              <p className="question"onClick={() => num == 4? setNum(null) : setNum(4)}>Can I cancel my subscription?</p>
             {num == 4 && <p className="answer">Yes! Send us a message and we’ll process your request no questions asked.</p>}
            </div>
            <img src="./img/icon-arrow-down.svg" alt="arrow" className="arrow" />
          </div>

          <div className="wrapper">
            <div className="question-answer">
              <p className="question"onClick={() => num == 5? setNum(null) : setNum(5)}>Do you provide additional support?</p>
             { num == 5 &&<p className="answer" >Chat and email support is available 24/7...</p>}
            </div>
            <img src="./img/icon-arrow-down.svg" alt="arrow" className="arrow" />
          </div>
        </div>
      </main>
    </>
  )
}