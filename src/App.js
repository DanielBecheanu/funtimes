import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'seedrandom/seedrandom.js';
import React from 'react';
import './App.css';
import Question from './Question';
// Math.seedrandom('any string you like');
// console.log(Math.seedrandom());

const functions = [
    { opp: "+", func: function (a, b) { return a + b }, min: 0, max: 1000},
    { opp: "-", func: function (a, b) { return a - b }, min: 0, max: 1000},
    { opp: "*", func: function (a, b) { return a * b }, min: 0, max: 10},
    // {opp:"/",func:function (a,b){return a/b}}
];
function App() {
    let bar = generateItems().map((x, idx) =>
        <Question key={idx} left={x.left} opp={x.opp} right={x.right} expected={x.expected}/>
    );
    return (
        <div className="row">
            {bar}
        </div>
    );
}


export default App;
function generateItems() {
    let result = [];
    const items = 92;
    for (let i = 0; i < items; i++) {
        let funcIdx = Math.random() < 0.4 ? 1 : getRndInteger(0, 2);
        let opp = functions[funcIdx];
        let left = getRndInteger(opp.min, opp.max);
        let rightMax = opp.max;
        if (opp.opp === "-") {
            rightMax = left;
        }
        let right = getRndInteger(opp.min, rightMax);

        result.push({left: left, opp: opp.opp, right: right, expected: opp.func});
    }
    return result;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}