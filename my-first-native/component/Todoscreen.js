import { StyleSheet, Text, View ,TextInput, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Notfound from './notfound'
import axios from 'axios'




const Todoscreen = () => {
    const [Todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [edit, setEdit] = useState('')

    useEffect(()=>{
        axios.get('http://192.168.100.20:5000/get')
        .then((res)=>setTodos(res.data))
        .catch((err)=>console.log(err))
    },[])

    const addTodo=()=>{
        axios.post('http://192.168.100.20:5000/add',{task:task})
        .then(res=>setTodos([...Todos,res.data]))
        .catch(err=>console.log(err))
        setTask('')
    }

    const editTodo = (todo) => {
        setEdit(todo)
        setTask(todo.task)
    }

   const updateTodo = () => {
         axios.put(`http:///192.168.100.20:5000/update/${edit._id}`,{task:task})
            .then(res=>setTodos(Todos.map((item)=>item._id===edit._id?{...item,task:task}:item)))
            .catch(err=>console.log(err))
            setTask('')
            setEdit('')
    }


    const deleteTodo = (id) => {
        axios.delete(`http://192.168.100.20:5000/delete/${id}`)
        .then(setTodos((todo)=>todo.filter((item)=>item._id!==id)))
        .catch(err=>console.log(err))
    }
    
    const renderList = ({item})=>{  
        return(
            
         <View style={styles.render}>   
             <Text style={{fontSize:15,fontWeight:'bold',width:'70%'}}>{item.task}</Text>
             <MaterialIcons name='edit' size={24} color='green' style={{width:"15%"}} onPress={()=>editTodo(item)} />
             <MaterialIcons name='delete' size={24} color='red' style={{width:"15%"}} onPress={()=>deleteTodo(item._id)}/>                
         </View>
        )
    }

  return (
    <>
        <View style={styles.container}>
            <Text style={{color:'blue',fontSize:20,fontWeight:'900',marginBottom:15}}>Todo List</Text>
            <TextInput placeholder='Add a task' value={task} onChangeText={(t)=>setTask(t)}  style={styles.input}/>
            {
                edit ? 
                <TouchableOpacity style={styles.button}>
                   <Text style={styles.add} onPress={updateTodo}>Update</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.button}>
                     <Text style={styles.add} onPress={addTodo}>Add</Text>
                </TouchableOpacity>
            }
            
            <FlatList data={Todos} renderItem={renderList}/>
            {
                Todos.length<=0 && <Notfound/>
            }
        </View>
        
    </>
  )
}

export default Todoscreen

const styles = StyleSheet.create({
    container:{
        
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },
    input:{
        width:'80%',
        padding:10,
        borderBottomWidth:1,
    },
    button:{
        backgroundColor:'black',
        width:'80%',
        borderRadius:6,
        padding:10,
        margin:10,
        marginBottom:40,
    },
    add:{
        color:'white',
        textAlign:'center',
    },
    render:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        width:'86%',    
        backgroundColor:'#A1E3F9',
        borderRadius:6,
        margin:5,
        marginLeft:24
    }
    
})