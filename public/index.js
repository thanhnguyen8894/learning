/* eslint-disable no-unused-vars */


var todoList = [1, 5, 6,7,87,9];

        //add new data to arr todoList
        function addValue() {

            const input = document.getElementById('newData');
            const newData = input.value;
            if(newData.length == 0){
                alert('Please input data')
            }
            else{
            console.log(newData);
            todoList.push(newData);
            render();
            input.value = '';
            }
        }
        console.log(todoList)
        //delete data from todoList
        function deleteItem() {  
            const oldItem = document.getElementById('todo-list');
            const dellItem = oldItem.value;
            todoList.pop(dellItem);
            render();
            console.log(todoList)
        };

        function render() {
            const htmlList = document.getElementById('todo-list');
            const content = todoList.map(function (item) {
                return '<li>' + item + '</li>'
            });

            htmlList.innerHTML = content.join(' ');
        }
        render();
        