import React, { useReducer, StrictMode } from 'react';
import { render } from 'react-dom';
// import MainPage from './components/SignInEx/MainPage';
import './index.css';

const Text = ({ id, onEdit, onDelete, children, ...restProps }) => {
  return (
    <p {...restProps}>
      {children}{' '}
      <button type="button" onClick={() => onEdit(id)}>
        수정
      </button>
      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
    </p>
  );
};

const initialSinario = [
  { id: 'lkfs-fjkld-jflkxf', content: '마블 캐릭터 충돌' },
  { id: 'kdfd-wkdif-kclskw', content: 'DC 캐릭터 댄스 파티' },
];

const sinarioReducer = (state, action) => {
  if (action.type === 'ADD_TEXT') {
    console.log('ADD_TEXT 요청 수락');
  }
  if (action.type === 'EDIT_TEXT') {
    console.log('EDIT_TEXT 요청 수락');
  }
  if (action.type === 'DELETE_TEXT') {
    console.log('DELETE_TEXT 요청 수락');
    console.log(action.payload);
    return state.filter((text) => text.id !== action.payload);
  }

  return state;
};

const Sinario = () => {
  // useReducer 훅 → 상태, 디스패치를 반환
  const [sinario, dispatch] = useReducer(sinarioReducer, initialSinario);

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
      {sinario.map(({ id, content }) => {
        return (
          <Text key={id} id={id} onEdit={handleEdit} onDelete={handleDelete}>
            {content}
          </Text>
        );
      })}
    </div>
  );
};

render(
  <StrictMode>
    <Sinario />
  </StrictMode>,
  document.getElementById('root')
);
