document.addEventListener ( 'DOMContentLoaded', userClickBehavior);
let behaviorList = [];
function userClickBehavior () {
    console.log ('DOM fully loaded and parsed');
    document.addEventListener ( 'click', getClikckedElement);
}

function getClikckedElement (event) {
    const tagElement = event.target.tagName.toLowerCase ();
    const tagId = event.target.id;
    const tagClass = event.target.className;
    const tagTextContent = event.target.textContent;
    analysedUserBehavior (tagElement, tagId, tagClass, tagTextContent);
};
function getElementByID (id) {
    return document.getElementById(id);
}

function analysedUserBehavior (elment, id, className, elementTextContent) {
    const clickedElementObject = {
        elment: elment,
        id: id,
        className: className,
        elementTextContent: elementTextContent
    };
    if (elment === 'button') {
        getElementByID (id).style.backgroundColor = 'red';
    }
    elementsClicked (clickedElementObject);
}

function createElement (elment, id, className, ) {
    const newElement = document.createElement (elment);
    newElement.id = id;
    newElement.className = className;
    return newElement;
}

function addElementToDOM (elment, id, className, pid) {
    const newElement = createElement (elment, id, className);
    getElementByID (pid).appendChild (newElement);
}
function addTextToElement (id, text) {
    getElementByID (id).innerHTML = text;
}

function elementsClicked (obj) {
    behaviorList.push (obj);
    showElementsClicked (behaviorList);
};
function showElementsClicked () {
    behaviorList.forEach ( displayElementsClicked );
}
function displayElementsClicked (obj) {
    console.table (obj);
}