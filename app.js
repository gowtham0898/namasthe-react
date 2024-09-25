const heading = React.createElement("h1",{id:"heading"},"hello world !!");

{/* <div id="parent">
    <div id="chield">
        <hi>hello</hi>
    </div>
    <div id="chield">
        <h2>hello2</h2>
    </div>
</div> */}


 const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"chield1"},[
        
        React.createElement("h1",{},"hello"),
        React.createElement("h2",{},"hello")
    ]),
    React.createElement("div",{id:"chield2"},[
        
        React.createElement("h1",{},"hello2"),
        React.createElement("h2",{},"hello2")
    ]),
])
    //console.log("parent => ",parent);
    
     const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log("root ==> ",root);

     root.render(parent);