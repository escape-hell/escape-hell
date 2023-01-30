import { KeyboardEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import useInput from "../../hooks/common/useInput";
import useDeleteComment from "../../hooks/query/useDeleteComment";
import useGetCommentList from "../../hooks/query/useGetCommentList";
import useUpdateComment from "../../hooks/query/useUpdateComment";
import getDate from "../../utils/getDate";

const Comment = ({ comment }: { comment: CommentType }) => {
  const { pathname } = useLocation();
  const level = Number(pathname.split("/")[1]);

  const { name, content, password } = comment;

  const [isEdit, setIsEdit] = useState(false);
  const [editName, changeEditName] = useInput(name);
  const [editContent, changeEditContent] = useInput(content);
  const [editPassword, changeEditPassword] = useInput();

  const queryKey = useGetCommentList.getKey(level);

  const { mutate: updateComment } = useUpdateComment({
    queryKey,
    commentId: comment.id,
  });
  const { mutate: deleteComment } = useDeleteComment({
    queryKey,
    commentId: comment.id,
  });

  const onUpdate = () => {
    if (password !== editPassword) {
      return alert("비밀번호가 다릅니다.");
    }
    const commentData = {
      id: comment.id,
      data: { name: editName, content: editContent },
    };
    updateComment(commentData);
    setIsEdit(false);
  };

  const onDelete = () => {
    if (password !== editPassword) {
      setIsEdit(false);
      return alert("비밀번호가 다릅니다.");
    }
    deleteComment(comment.id);
    setIsEdit(false);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      onUpdate();
    }
  };

  return (
    <div className="bg-header mb-3 rounded p-3">
      {isEdit ? (
        <div className="flex-column gap-3 bg-header my-3 py-5 px-2">
          <div className="w-full flex flex-row gap-2">
            <input
              className="flex-1 bg-transparent border border-white rounded p-1"
              type="text"
              value={editName}
              onChange={changeEditName}
              placeholder="작성자 이름"
            />
            <input
              className="flex-1 bg-transparent border border-white rounded p-1"
              type="password"
              value={editPassword}
              onChange={changeEditPassword}
              placeholder="비밀번호"
            />
          </div>
          <textarea
            className="w-full bg-transparent resize-none border rounded p-1 mt-3 mb-1"
            value={editContent}
            onChange={changeEditContent}
            onKeyUp={onKeyUp}
            placeholder="작성내용"
          />
          <div className="flex justify-end gap-2">
            <button
              className="bg-primary px-2 rounded font-bold"
              onClick={onUpdate}
            >
              수정
            </button>
            <button
              className="bg-primary px-2 rounded font-bold"
              onClick={onDelete}
            >
              삭제
            </button>
          </div>
        </div>
      ) : (
        <div className="px-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <div className="font-bold">{comment.name}</div>
              <div className="text-date">{getDate(comment.created_at)}</div>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-primary px-2 rounded font-bold"
                onClick={() => setIsEdit(true)}
              >
                수정 / 삭제
              </button>
            </div>
          </div>
          <div className="mt-2 mb-3">{comment.content}</div>
        </div>
      )}
    </div>
  );
};

export default Comment;
