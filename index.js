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

    // create table for user Behavior analysis
    addElementToDOM ('table', 'analytic_table', 'analytic_tt', 'analysis');
    addElementToDOM ('tr', 'analytic_tr_headings', 'analytic_tr', 'analytic_table');
    addElementToDOM ('th', 'analytic_th_tag_name', 'analytic_th', 'analytic_tr_headings');
    addElementToDOM ('th', 'analytic_th_tag_id', 'analytic_th', 'analytic_tr_headings');
    addElementToDOM ('th', 'analytic_th_tag_class', 'analytic_th', 'analytic_tr_headings');
    addElementToDOM ('tr', 'analytic_tr_data', 'analytic_tr', 'analytic_table');
    addElementToDOM ('td', 'analytic_td_tag_name', 'analytic_td', 'analytic_tr_data');
    addElementToDOM ('td', 'analytic_td_tag_id', 'analytic_td', 'analytic_tr_data');
    addElementToDOM ('td', 'analytic_td_tag_class', 'analytic_td', 'analytic_tr_data');

    // add text content to table
    //table headins:
    addTextToElement ('analytic_th_tag_name', "Tag Name");
    addTextToElement ('analytic_th_tag_id', "Tag ID");
    addTextToElement ('analytic_th_tag_class', "Tag Class");

    //table data:
    addTextToElement ('analytic_td_tag_name', elment);
    addTextToElement ('analytic_td_tag_id', id);
    addTextToElement ('analytic_td_tag_class', className);
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

