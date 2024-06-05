import React, {FC, useState} from 'react';
import ITodo, {toDoStatus} from "../Models";
import './style/addNewList.css'

type IProps = {
    addPost: (newPost: ITodo) => void
}

const AddNewPost: FC<IProps> = ({addPost}: IProps) => {

    const [newPost, setNewPost] = useState<ITodo>({
        id: Date.now(),
        text: '',
        status: toDoStatus.ACTIVE
    })

    const clean = () => {
        if (newPost.text.trim()) {
            addPost(newPost)
            setNewPost({...newPost, text: '', id: Date.now()})
        }
    }

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className='add_new_post_form'>
            <input
                type='text'
                placeholder='What needs to be done?'
                value={newPost.text}
                onChange={e => setNewPost({...newPost, text: e.target.value})}
                className='new_post_input'/>
            <button
                onClick={clean}
                className='new_post_btn'>Add</button>
        </form>
    );
};

export default AddNewPost;