import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';

function App() {
    return(
<>
<h2 className="mainheading">LIST OF 5 netFlix series</h2>
<Cards imgSrc={Sdata[0].imgSrc} sname={Sdata[0].sname} cname={Sdata[0].cname} link = {Sdata[0].link}
/>

<Cards imgSrc={Sdata[1].imgSrc} sname={Sdata[1].sname} cname={Sdata[1].cname} link = {Sdata[1].link}
/>

<Cards imgSrc={Sdata[2].imgSrc} sname={Sdata[2].sname} cname={Sdata[2].cname} link = {Sdata[2].link}
/>

<Cards imgSrc={Sdata[3].imgSrc} sname={Sdata[3].sname} cname={Sdata[3].cname} link = {Sdata[3].link}
/>

<Cards imgSrc={Sdata[4].imgSrc} sname={Sdata[4].sname} cname={Sdata[4].cname} link = {Sdata[4].link}
/>




</>
    )
}

export default App;

