function Header () {
    let dom = document.getElementById("wrapper");
    let container = document.createElement("div");
    let txt = document.createTextNode("Header");
    container.appendChild(txt);
    dom.appendChild(container);
}

// export default Header;
module.exports = Header;