import React from 'react';
import ReactDOM from 'react-dom';

const olddata = [
    {
        name:'raja',
        rollno:'52349'
    },
    {
        name:'usman',
        rollno:'52349'
    },
    {
        name:'murad',
        rollno:'52349'
    },
    {
        name:'kiyani',
        rollno:'52349'
    },
    {
        name:'usman',
        rollno:'52349'
    },
    {
        name:'usman',
        rollno:'52349'
    }
]
const newdata = olddata.map((currentdata) =>{
    return `the name is ${currentdata.name}.And the roll no is ${currentdata.rollno}.....`;
});;
ReactDOM.render(
<h1>
{newdata}
</h1>
,document.getElementById('root'));