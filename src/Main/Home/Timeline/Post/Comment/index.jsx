import { useContext, useState, useEffect } from 'react'
import './style.css'
import { UserContext } from '../../../../../App'

function Comment({comment}) {
    const [commentingUser, setCommentingUser] = useState(null)
    const userContext = useContext(UserContext)

    useEffect(() => {
        setCommentingUser(userContext.users.filter(user => Number(user.id) == Number(comment.contactId)))
    }, [])

    if(!commentingUser) return <p>Loading user...</p>

    return(
        <div className="comment">
            <div>{commentingUser[0].firstName[0]}</div>
            <div className="comment-name-content">
                <h4>{commentingUser[0].firstName} {commentingUser[0].lastName}</h4>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment