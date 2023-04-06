//prepare to connect Json Server
const link = 'http://localhost:3000/courses';
var titleElement = document.querySelector("input[name='title']");
var bodyElement = document.querySelector("input[name='body']");
var btnElement = document.querySelector(".btn");
//connect and render data in web
//function start
function start(){
    getData(renderData);
    handleAddData();
}
start();
//function getData
function getData(callback){
    //connect to Json server
    fetch(link)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}
//function renderData
function renderData(data){
    var textElement = document.querySelector(".show")
    var htmls = data.map(function(currData){
        return `
        <li id="item-${currData['id']}">
            <h2>${currData['title']}</h2>
            <p>${currData['body']}</p>
            <button onclick = "handleDeleteData(${currData['id']})">Xóa</button>
            <button onclick = "handleUpdateData(${currData['id']})">Update</button>
        </li>
        `
    })
    htmls.join('');
    textElement.innerHTML = htmls
}
//function createData
function createData(data){
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(link, options)
        .then(function(response){
            return response.json()
        })
}
//function addItem
function handleAddData(){
    btnElement.onclick = function(){
        var data = {
            title: titleElement.value,
            body: bodyElement.value
        }
        createData(data);
    }
}
//function deleteItem
function handleDeleteData(id){
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
        //body: JSON.stringify(data)
    }
    fetch(link + "/" + id, options)
        .then(function(response){
            return response.json()
        })
}
//----------------------------------------------------
function handleUpdateData(id){
    titleElement.value = document.querySelector("#item-"+ id +" "+"h2").textContent;
    bodyElement.value = document.querySelector("#item-"+ id +" "+"p").textContent;
    document.querySelector(".submit").innerHTML = `
    <button class="update">Sửa</button>
    `
    var updateBtn = document.querySelector(".update");
    updateBtn.onclick = function(){
        var new_title = document.querySelector("input[name='title']");
        var new_body = document.querySelector("input[name='body']");
        var new_data = {
            title: new_title.value,
            body: new_body.value
        }
        var options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(new_data)
        }
        fetch(link + "/" + id, options)
        .then(function(response){
            return response.json()
        })

    }
}
