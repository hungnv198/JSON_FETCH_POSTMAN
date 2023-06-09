//----------------------------------JSON-FETCH-POSTMAN------------------------------
//1. Khái niệm JSON:
//- là 1 định dạng dữ liệu ( chuỗi)
//- Viết tắt: Javascript Object Notation: cú pháp đơn giản, nhẹ
//- Thể hiện kiểu dữ liệu: number,string(""), boolean, null, array, object
//- thao tác : mã hóa: encode, giải mã: decode
//- stringify: chuyển đổi sang 1 mã khác: từ TypeJS sang JS
//- Parse: giải mã: từ JSON type sang JS 
//Ví dụ:
//var json = '["JavaScript", "PHP"]';//dùng nháy kép, không thừa dấu phẩy cuối
//Object:
//var json = '{"name":"hung","age":18}';
//Chuyển đổi sang Javascript
//var a = '1';
//console.log(JSON.parse(json));
//Luôn nhận json từ backend, dùng parse để hiển thị lên web

//-------------------Promise (sync, async)- trong JAVASCRIPT-------------
//- setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame:sd trong JS là async
//- biết đc sync
//Sync/ Async: theo tư duy đồng bộ, code viết trc thực thi trước, code viết sau in ra sau.
// callback để sử dụng các thao tác bất đồng bộ
//-----------------Promise (pain)------------------
//callback hell: đưa ra các công việc mà việc này phụ thuộc vào việc kia
// setTimeout(function(){
//     console.log(1);// việc 1
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//             setTimeout(function(){
//                 console.log(4)
//             },1000);
//         },1000);
//     },1000);
// }, 1000);
//Promise(concept):
//1.Tạo ra một promise
//2. Executor
//-> sinh ra memory leak
//
// 3 trạng thái: 
//Pending
//fulfilled
//reject


// var promise = new Promise(//nhận 1 function
//     //Executor
//     function(resolve, reject){
//         // logic xử lý
//         //Thành công: resolve()
//         //Thất bại: reject()
//         //fake call api
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'javascript'
//         //     }
//         // ]);
//         reject("có lỗi");
//     }
// )
// promise
//     .then(function(course){
//         //khi resolve đc gọi
//         //console.log("Success!");
//         console.log(course);

//     })
//     .catch(function(error){
//         //khi reject đc gọi
//         console.log(error);
//     })
//     .finally(function(){
//         //một trong 2 được gọi
//         console.log("ok!");
//     });
//pyramid of doom
// khi phỏng vấn: 
//- promise : khái niệm sinh ra để xử lý các thao tác bất đồng bộ,
//trước khi có promise thì dùng callback -> callback hell: code khó nhìn
//khó hiểu. Promise đc sinh ra để gq vấn đề.
//- để tạo ra 1 promise: khởi tạo bằng new Promise và truyền vào contructor một
//executor function.
//khi executor function thực thi nhận 2 tham số dạng hàm: resolve. reject
// resolve: thao tác xl thành công
// reject: thao tác xl thất bại
// khi dùng promise, đối tượng promise tạo ra: cta sd qua các phg thức: then, catch.
//then và catch đều nhận các callbackfunction:
//nó sẽ đc thực thi vào then khi promise đc resolve, vào catch: khi promise đc reject
//----------------------------Promise: chain-----------
//---tính chất Chain
// var promise = new Promise(//nhận 1 function
//     //Executor
//     function(resolve, reject){
//         // logic xử lý
//         //Thành công: resolve()
//         //Thất bại: reject()
//         //fake call api
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'javascript'
//         //     }
//         // ]);
//         resolve();
//         //reject("có lỗi");
//     }
// )
// promise
//     // .then(function(course){
//     //     //khi resolve đc gọi
//     //     //console.log("Success!");
//     //     console.log(course);

//     // })
//     //kq trả về func đằng trc là tham số đầu vào func sau.
//     //nếu ko return trả về undefined
//     //nếu ko return ra 1 promise, chạy ngay tập liền kề
//     //khi là 1 promise: chờ promise giải quyết xong mới chạy khối liền kề
//     .then(function(){
//         console.log(1);
//     })
//     .then(function(){
//         console.log(2);
//     })
//     .then(function(){
//         console.log(3);
//     })
//     .catch(function(error){
//         //khi reject đc gọi
//         console.log(error);
//     })
//     .finally(function(){
//         //một trong 2 được gọi
//         console.log("ok!");
//     });
//Giải quyết bài toán:
// function sleep(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     });
// }

// sleep(3000)
//     .then(function(){
//         console.log(1);
//         return sleep(3000);
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(3000);
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(3000);
//     })
//     .then(function(){
//         console.log(4);
//         return sleep(3000);
//     })
//--------------------------------Promise method----------------
// khi chạy resolve mà có lỗi, chạy xuống catch
//1. promise.resolve
//2. promis.reject
//3. promise.all
//tạo nhanh
// var promise = Promise.resolve('Success!')
// var promise = new Promise(
//     function(resolve, reject){
//         //resolve('Success');
//         reject('Fail!');
//     }
// )
// Thư viện: Quy ước luôn luôn là một promise
// promise
//     .then(function(result){
//         console.log('Result', result);
//         return Promise.reject('Fail!')
//     })
//     .catch(function(result){
//         console.log('Result', result);
//     })

//3. Promise.all: chạy // các promise
// var promise_1 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1]);
//     }, 1000);
// }
// );
// var promise_2 = new Promise(function(resolve, reject){
//     // setTimeout(function(){
//     //     resolve([2, 3]);
//     // }, 2000);
//     reject('Có lỗi');
// }
// );

// Promise.all([promise_1, promise_2])// nhận đối số là 1 mảng
//     .then(function(result){
//         //console.log(result);
//         var result_1 = result[0];
//         var result_2 = result[1];
//         console.log(result_1.concat(result_2));
//     })
//     .catch(function(error){
//         console.log("Result", error)
//     })
//----------------------------Promise Example---------------
//
// var users = [
//     {
//         id: 1,
//         name:'Hùng'
//     },
//     {
//         id: 2,
//         name:'Nam'
//     },
//     {
//         id: 3,
//         name:'Minh'
//     }
// ];
// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Hí anh em'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Hôm nay tôi sủi nhé'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'Ngày mai đi chơi nhé các bạn'
//     }
// ];
// //1. Lấy comment:
// //2. Từ comment lấy ra user_id
// //3. Từ user_id lấy ra user tương ứng
// //fake API:
// function getComment(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(comments);
//         }, 2000);
//     });
// };
// function getUsersById(userIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id);
//         });
//         resolve(result);
//     }, 1000);
// }

// getComment()
//     .then(function(comments){
//         //console.log(comment);
//         var users_id = comments.map(function(comment){
//             return comment.user_id;
//         });
//         //console.log(users_id);
//         return getUsersById(users_id)
//                     .then(function(users){
//                         return {
//                             users: users,
//                             comments: comments,
//                         }
//                     });
//         })
//     .then(function(data){
//         //console.log(data);
//         var commentBlock = document.getElementById('comment-box');
//         var html ="";
//         data.comments.forEach(function(comment){
//             var user = data.users.find(function(user){
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });
//         commentBlock.innerHTML = html;
//     })
//Hiểu chức năng mảng
//Hàm, callback
//Promise
//DOM 

//promise hell
//--------------------------------FETCH----------------------------------
//Khái niệm
//API: Application Programming interface: giao diện lập trình ứng dụng
//- Cổng giao tiếp giữa các phần mềm. Hiểu đơn giản là URL
// Backend: trả API -> sd Fetch -> JSON/XML
//JSON.parse -> JS type.
//Render ra giao diện với HTML
//Cách sử dụng fetch
// var postAPI = 'https://jsonplaceholder.typicode.com/posts';
// //trả về stream
// fetch(postAPI)//Sử dụng Promise
//     .then(function(reponse){
//         //Chuyển từ JSON sang JS
//         return reponse.json();
//     })
//     .then(function(posts){
//         //nhận JS object
//         console.log(posts);
//         //Lấy dữ liệu hiển thị lên web
//         //Dùng map để trả về mảng
//         var htmls = posts.map(function(post){
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`
//         })
//         htmls.join('');
//         document.getElementById("comment-box").innerHTML = htmls;
//     })
//--------------------------------JSON SERVER-----------------------------

// var courseAPI = 'http://localhost:3000/courses';
// fetch(courseAPI)
//     .then(function(responsive){
//         return responsive.json();
//     })
//     .then(function(posts){
//         console.log(posts);
//         //Show lên web
//         var htmls = posts.map(function(post){
//             return `
//             <li>
//                 <h2>${post['title']}</h2>
//                 <p>${post['body']}<p>
//             </li>
//             `
//         });
//         htmls.join('');
//         document.querySelector("#comment-box").innerHTML = htmls;
//     })
//-- dùng postman làm việc với RESTAPI
//CRUD:
//+ Create: Tạo mới --> POSH
//+Read: Lấy dữ liệu --> Get
//Update: Chỉnh sửa --> PUT/PATCH
//Delete: Xóa --> DELETE
//--> Nhập vào phần body, tìm đến x-www from url encode
//Dùng fetch và REST API
// var listCourseBlock = document.querySelector(".list-course")

// var link = 'http://localhost:3000/courses';
// function start(){
//     getCourse(renderCourse);
//     handleForm();
// }

// start();

// //Tạo hàm get data bằng API
// function getCourse(callback){
//     fetch(link)
//         .then(function(responsive){
//             return responsive.json();
//         })
//         .then(callback)
// }
// //Tạo hàm render course
// function renderCourse(course){
//     var htmls = course.map(function(currData){
//         return `
//         <li>
//             <h2>${currData['title']}</h2>
//             <p>${currData['body']}</p>
//             <button onclick="handleDeleteCourse(${currData.id})" >Xóa</button>
//         </li>
//         `
//     })
//     htmls.join();
//     listCourseBlock.innerHTML = htmls;
// }
// //Function create
// function createCourse(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(link, options)
//         .then(function(response){
//             return response.json()
//         })
//         .then(callback)
// }//function delete course
// function handleDeleteCourse(id){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//     }
//     fetch(link + '/' + id, options)
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(){
//             getCourse(renderCourse);
//         })
//     }
// //Function handle
// function handleForm(){
//     //Lắng nghe click nút
//     var createBtn = document.querySelector("#create");
//     createBtn.onclick = function(){
//         var title = document.querySelector("input[name = 'title']").value;
//         var description = document.querySelector("input[name ='description']").value;
//         var formData = {
//             title : title,
//             body: description
//         }
//         createCourse(formData);
//     }
// }
var a = document.querySelector("#comment-box ul")
console.log(a);