document.addEventListener ( 'DOMContentLoaded', userClickBehavior);

function userClickBehavior () {
    console.log ('DOM fully loaded and parsed');
    document.addEventListener ( 'click', getClikckedElement);
}

function getClikckedElement (event) {
    const tagElement = event.target.tagName.toLowerCase ();
    const tagId = event.target.id;
    const tagClass = event.target.className;
    console.log (tagElement, tagId, tagClass);
};
function getElementByID (id) {
    return document.getElementById(id);
}