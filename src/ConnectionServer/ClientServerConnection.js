import Api from "./Api";

export default {
    taskGetAll(){
        return Api().get('task/getAll');
    },
    editUser(obj){
        return Api().post('/user/editUser/'+obj.id,obj);
    },

    getUser(id){
        return Api().delete('/task/get/'+id);
    },

    addTask(obj){
        return Api().post('/addTask',obj);
    },

    editTask(obj){
        return Api().post('/task/edit/'+obj.id);
    },

    deleteTask(id){
        return Api().delete('/task/deleteTask/'+id);
    },

    getTask(id){
        return Api().delete('/task/get/'+id);
    }
};