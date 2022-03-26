import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-answer-container'>
            <div className='question-answer-card'>
                <div className="question">
                    <h2>How Does React Work?</h2>
                </div>
                <div className="answer">
                    <p>
                        React is a JavaScript library, some call framework but that's not my concern, that synergizes in creating UI like single page applications, mobile apps or building complex apps in an anticipated and structured way using declarative paradigm which (declarative paradigm) describes the end result only but doesn't act as a step by step guide of how to perform it. A react application is made of several components, eact liable to render a tinu, reusable piece of HTML. These components can be nested to other components to build complex applications by those many simple building blocks. React components accept input data (as props) and return a React element to declare data  that appears on the UI.
                    </p>
                </div>
            </div>
            <div className='question-answer-card'>
                <div className="question">
                    <h2>How <code>useState()</code> Works?</h2>
                </div>
                <div className="answer">
                    <p>
                        The useState(), called a HOOK, is a special function that receives an initial state as an argument and returns an array of two entries. First one is a variable array of initial state and the other is a function that is used to assign or update the state into the first variable array. Its syntax looks like: <b> const [state, setState]=useState(initialState)</b>. It is particularly useful for local component states, but bigger projects might require additional state management solutions. The initial state value will be assigned only for initial render but will be neglected in subsequence and current state value will be retrieved.
                    </p>
                </div>
            </div>
            <div className='question-answer-card'>
                <div className="question">
                    <h2>What is the Difference between <code>props</code> and <code>state</code></h2>
                </div>
                <div className="answer">
                    <h3>State</h3>
                    <p>the state is a heart of react component that represents component’s local state or information that can only be accessed or modified inside the component or by the component directory. </p>
                    <h4>Characteristics of State</h4>
                    <ul>
                        <li>It is Mutable</li>
                        <li>Its changes can be asynchronous</li>
                        <li>Can not be accessed by child component</li>
                        <li>Stateless component can not have state</li>
                        <li>It can not make component reusable</li>
                    </ul>
                    <h3>Props</h3>
                    <p>Props are read-only component that work similar to the HTML attributes by which data are passed from one component to another  </p>
                    <h4>Characteristics of Props</h4>
                    <ul>
                        <li>It is immutable</li>
                        <li>Props are read-only</li>
                        <li>Can  be accessed by child component</li>
                        <li>Stateless component can  have Props</li>
                        <li>props  make component reusable</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Questions;