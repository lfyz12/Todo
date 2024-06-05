import React, {FC, useEffect,  useState} from 'react';
import ITodo, {toDoStatus} from "../Models";
import PostItem from "./PostItem";
import './style/post.css'

interface IProps {
    todoPosts: ITodo[]
    isFilter: string
    isStatus: boolean
    changeStatus: (id: number, status: toDoStatus) => void
}

const PostList: FC<IProps> = ({todoPosts, changeStatus, isFilter, isStatus}: IProps) => {
    const [posts, setPosts] = useState<ITodo[]>([...todoPosts])

    const onlyActive =() => {
        return setPosts(todoPosts.filter(post => post.status === toDoStatus.ACTIVE))
    }

    const onlyComplited = () => {
        return setPosts(todoPosts.filter(post => post.status === toDoStatus.COMPLITED))
    }

    const checkPosts = () => {
        if (isFilter === 'active') {
            onlyActive()
        } else if (isFilter === 'complited') {
            onlyComplited()
        } else {
            setPosts(todoPosts)
        }
    }

    useEffect(() => {
        checkPosts()
    }, [isFilter, todoPosts.length, isStatus]);

    return (
        <section className='post_list'>
            {posts.map(post =>
                <PostItem  key={post.id} post={post} changeStatus={changeStatus}/>)}
        </section>
    );
};

export default PostList;