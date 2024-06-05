import React, {FC} from 'react';
import ITodo, {toDoStatus} from "../Models";

interface IProps {
    post: ITodo
    changeStatus: (id: number, status: toDoStatus) => void
}
const PostItem: FC<IProps> = ({post, changeStatus}: IProps) => {

    const click = () => {
        if (post.status === toDoStatus.ACTIVE) {
            changeStatus(post.id, toDoStatus.COMPLITED)
        } else {
            changeStatus(post.id, toDoStatus.ACTIVE)
        }
    }

    return (
        <div className='post_item' onClick={click}>
            <div className='status'>
                {post.status === toDoStatus.COMPLITED && <div className='complited'></div>}
            </div>
            <p className={`post_item_text ${post.status === toDoStatus.COMPLITED && 'task_complited'}`}>{post.text}</p>
        </div>
    );
};

export default PostItem;