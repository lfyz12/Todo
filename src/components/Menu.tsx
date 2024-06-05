import React, {FC, useEffect, useState} from 'react';
import ITodo, {toDoStatus} from "../Models";
import './style/menu.css'
interface IProps {
    posts: ITodo[]
    isChangeStatus: boolean
    delComplited: () => void
    changeFilter: (status: string) => void
}

const Menu: FC<IProps> = ({posts, isChangeStatus, delComplited, changeFilter}: IProps) => {
    const [leftCount, setLeftCount] = useState<number>(0)
    const counting = () => {
        setLeftCount(posts.filter(post => post.status === toDoStatus.ACTIVE).length)
    }

    useEffect(() => {
        counting()
    }, [isChangeStatus, posts.length]);

    return (
        <footer className='footer'>
            <p className='footer_text'>{leftCount} {leftCount > 1 ? 'todos' : 'todo'} left</p>
            <div className='footer_btn_box'>
                <button className='footer_btn' onClick={() => changeFilter('all')}>All</button>
                <button className='footer_btn' onClick={() => changeFilter('active')}>Active</button>
                <button className='footer_btn' onClick={() => changeFilter('complited')}>Complited</button>
            </div>

            <button className='footer_btn_clear' onClick={delComplited}>
                Clear complited
            </button>
        </footer>
    );
};

export default Menu;