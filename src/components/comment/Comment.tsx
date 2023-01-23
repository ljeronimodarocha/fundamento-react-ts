import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import styles from "./Comment.module.css";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((stateLike) => {
      return stateLike + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://pbs.twimg.com/profile_images/1408812978363830279/p_IPCQBw_400x400.jpg"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Rocha</strong>
              <time
                title="11 de maio de 2022 às oito horas, treze minutos e trinta segundos"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de há 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
