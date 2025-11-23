// var root = document.getElementById('g');

// var h1 = document.createElement('h1');

// h1.innerHTML = "Gaurav Here";

// root.appendChild(h1);

var temp = React.createElement('h1', null, 'Gaurav Here');

var oye = document.querySelector('#g');

var root = ReactDOM.createRoot(oye);

root.render(temp);  