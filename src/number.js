function number (param) {
    console.log(param);
  var div = document.createElement('div');
  div.setAttribute('id', 'number');
  div.innerHTML = 2000;
  document.body.appendChild(div);
}

// module.exports = number;

export default number;