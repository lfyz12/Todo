import React, {useState} from 'react';
import './App.css';
import ITodo, {toDoStatus} from "./Models";
import AddNewPost from "./components/AddNewPost";
import PostList from "./components/PostList";
import Menu from "./components/Menu";


function App() {
  const [todoPosts, setTodoPosts] = useState<ITodo[]>([])
  const [isChangeStatus, setIsChangeStatus] = useState<boolean>(true)
  const [isFilter, setIsFilter] = useState<string>('all')
  const addPost = (newPost: ITodo): void => {
    setTodoPosts([...todoPosts, newPost])
  }

  const delComplited = () => {
      setTodoPosts(prevState => prevState.filter(post => post.status === toDoStatus.ACTIVE))
  }

  const changeFilter = (status: string) => {
      setIsFilter(status)
  }

  const changeStatus = (id: number, status: toDoStatus) => {
      setTodoPosts(prevState => prevState.map(post => post.id === id ? {...post, status: status} : post))
      setIsChangeStatus(!isChangeStatus)
  }

  return (
    <div className="app">
        <div className='main'>
            <AddNewPost addPost={addPost}/>
            <PostList todoPosts={todoPosts} changeStatus={changeStatus} isFilter={isFilter} isStatus={isChangeStatus}/>
            <Menu posts={todoPosts} isChangeStatus={isChangeStatus} changeFilter={changeFilter} delComplited={delComplited}/>
        </div>
    </div>
  );
}

export default App;
