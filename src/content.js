function Content () {
    let dom = document.getElementById("wrapper");
    let container = document.createElement("div");
    let txt = document.createTextNode("Content");
    container.appendChild(txt);
    dom.appendChild(container);
}

// export default Content;
module.exports = Content;