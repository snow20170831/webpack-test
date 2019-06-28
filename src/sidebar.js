function Sidebar () {
    let dom = document.getElementById("wrapper");
    let container = document.createElement("div");
    let txt = document.createTextNode("Sidebar");
    container.appendChild(txt);
    dom.appendChild(container);
}

// export default Sidebar;
module.exports = Sidebar;