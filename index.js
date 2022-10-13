document.addEventListener ( 'DOMContentLoaded', userClickBehavior);

function userClickBehavior () {
    console.log ('DOM fully loaded and parsed');
    document.addEventListener ( 'click', getClikckedElement);
}

function getClikckedElement (event) {
    const tagElement = event.target.tagName.toLowerCase ();
    const tagId = event.target.id;
    const tagClass = event.target.className;
    analysedUserBehavior (tagElement, tagId, tagClass);
};
function getElementByID (id) {
    return document.getElementById(id);
}

function analysedUserBehavior (elment, id, className) {
    console.log ('clicked element is: ', elment);
    console.log ('clicked element id is: ', id);
    console.log ('clicked element class is: ', className);
    if (elment === 'button') {
        getElementByID (id).style.backgroundColor = 'red';
    }
}

function createElement (elment, id, className) {
    const newElement = document.createElement (elment);
    newElement.id = id;
    newElement.className = className;
    return newElement;
}

function addElementToDOM (elment, id, className) {
    const newElement = createElement (elment, id, className);
    getElementByID (pid).appendChild (newElement);
}