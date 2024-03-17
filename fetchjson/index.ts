import axios from "axios";

const url ='https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id:number;
    title:string;
    completed:boolean
} 

axios.get(url).then(response =>{
    const todo =response.data as Todo;

    const ID=todo.id;
    const title =todo.title;
    const finished =todo.completed;

   toDo(ID,title,finished)

})



const toDo=(ID:number,title:string,finished:boolean)=>{
    console.log(`
    The with ID:${ID}
    Has a title of: ${title}
    comleted :${finished}
    `)
}