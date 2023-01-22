var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}

document.querySelector('.form_action--button').onclick = 
function() {

    if (document.getElementById("title").
        value.length == 0){
        alert("Please enter your title");
    }
}

document.querySelector('.form_action--button').onclick = 
function() {

    if (document.getElementById("description").
        value.length == 0){
        alert("Please enter your description");
    }
}

// Retrieve the data
function readFormData()
{
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}

// Insert The Data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.title;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.description;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button onClick ='onDelete(this)'>Delete</button>`;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.description;
}

// Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset The Data
function resetForm()
{
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}