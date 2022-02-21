import React, { useState, useReducer, StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';

const Text = ({ draft, onEdit, onDelete, children, ...restProps }) => {
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(draft.content);

  return (
    <p {...restProps}>
      {!editMode ? (
        <span>{children}</span>
      ) : (
        <textarea
          value={editContent}
          onChange={(e) => {
            setEditContent(e.target.value);
          }}
        />
      )}{' '}
      {!editMode ? (
        <button type="button" onClick={() => setEditMode(true)}>
          수정
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            onEdit({
              ...draft, // { id, content }
              content: editContent,
            });
            setEditMode(false);
          }}
        >
          확인
        </button>
      )}
      <button type="button" onClick={() => onDelete(draft.id)}>
        삭제
      </button>
    </p>
  );
};

const initialScenario = [
  { id: 'lkfs-fjkld-jflkxf1', content: '마블 캐릭터 충돌1' },
  { id: 'lkfs-fjkld-jflkxf2', content: '마블 캐릭터 충돌2' },
  { id: 'lkfs-fjkld-jflkxf3', content: '마블 캐릭터 충돌3' },
  { id: 'lkfs-fjkld-jflkxf4', content: '마블 캐릭터 충돌4' },
  { id: 'kdfd-wkdif-kclskw5', content: 'DC 캐릭터 댄스 파티2' },
  { id: 'kdfd-wkdif-kclskw6', content: 'DC 캐릭터 댄스 파티3' },
  { id: 'kdfd-wkdif-kclskw7', content: 'DC 캐릭터 댄스 파티4' },
  { id: 'kdfd-wkdif-kclskw8', content: 'DC 캐릭터 댄스 파티5' },
  { id: 'kdfd-wkdif-kclskw9', content: 'DC 캐릭터 댄스 파티6' },
];

const scenarioReducer = (state, action) => {
  if (action.type === 'EDIT_TEXT') {
    console.log('EDIT_TEXT 요청 수락');
    return state.map((draft) => {
      if (draft.id === action.payload.id) {
        return action.payload;
      }
      return draft;
    });
  }
  if (action.type === 'DELETE_TEXT') {
    console.log('DELETE_TEXT 요청 수락');
    console.log(action.payload);
    return state.filter((text) => text.id !== action.payload);
  }

  return state;
};

const Scenario = () => {
  // useReducer 훅 → 상태, 디스패치를 반환
  const [scenario, dispatch] = useReducer(scenarioReducer, initialScenario);

  // 액션을 포함한 디스패치를 실행하는 이벤트 핸들러
  const handleDelete = (deleteId) =>
    dispatch(
      /* 액션: 상태 업데이트 요청서 */ {
        type: 'DELETE_TEXT',
        payload: deleteId,
      }
    );

  const handleEdit = (editId) =>
    dispatch({
      type: 'EDIT_TEXT',
      payload: editId,
    });

  return (
    <div style={{ margin: 30 }}>
      {scenario.map(({ id, content }) => {
        return (
          <Text
            key={id}
            draft={{ id, content }}
            onEdit={handleEdit}
            onDelete={handleDelete}
          >
            {content}
          </Text>
        );
      })}
    </div>
  );
};

render(
  <StrictMode>
    <Scenario />
  </StrictMode>,
  document.getElementById('root')
);
