# DAY 05 ⌁ 2022.02.15 학습 목차

## Emotion의 css prop 설정

- [ ] QnA ⌁ @emotion/babel-preset-css-prop 설정 (Storybook 설정 포함)
- [ ] Emotion ⌁ 글로벌(Global) 스타일 설정

## 아토믹(Atomic) 컴포넌트 ⌁ Checker 

- [ ] Console 패널 오류 확인 (`readOnly`, `onChange` 설명)
- [ ] `onChange` PropTypes 설정
- [ ] Story 파일에서 PureChecker 대신 Checker로 변경 후, 전달 받는 props 확인
- [ ] 컴파운드 컴포넌트 Checker.Wrapper 설정 및 스타일링
- [ ] `id`, `name` prop 제거 → `label` prop 설정

<br />

`src/components/checker/checker.jsx`

```js
import styled from '@emotion/styled';
import { string, bool, func } from 'prop-types';

import { theme } from '@/styles/theme';
import _checked from './assets/checked.svg';
import _unchecked from './assets/unchecked.svg';
import _loading from './assets/loading.svg';

/* -------------------------------------------------------------------------- */

export const Checker = ({ id, label, checked, loading, onChange, ...restProps }) => {
  return (
    <Checker.Wrapper checked={checked} loading={loading.toString()}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
        {...restProps}
      />
    </Checker.Wrapper>
  );
};

// prop 기본값 설정
Checker.defaultProps = {
  checked: false,
  loading: false,
  onChange: () => {},
};

// prop 타입 검사
Checker.propTypes = {
  /** Checker 컴포넌트 레이블 */
  label: string.isRequired,
  /** Checker 컴포넌트의 체크 상태 */
  checked: bool,
  /** Checker 컴포넌트의 로딩 상태 */
  loading: bool,
  /** Checker 컴포넌트의 체크 상태를 변경할 이벤트 핸들러 */
  onChange: func,
};

/* -------------------------------------------------------------------------- */

Checker.Wrapper = styled.span`
  position: relative;
  background: ${theme.colors.White};
  border-radius: 8px;

  :focus-within::before {
    outline: 3px solid ${theme.colors.focus[50]};
    border-radius: inherit;
  }

  & input {
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ checked, loading }) => {
      return loading === 'true' ? _loading : checked ? _checked : _unchecked
    }}) center center / cover;
  }
`;
```

## SVG Sprites 제너레이터

[github.com/yamoo9/svg-sprites](https://github.com/yamoo9/svg-sprites)

## SVGIcon 컴포넌트

```js
import { string, number, oneOf, oneOfType } from 'prop-types';
import sprites from '@/assets/sprites/symbol/sprites.svg';

export const iconTypes = ['unicorn', 'rainbow', 'checked', 'unchecked', 'loading'];

export function SVGIcon({
  id,
  label,
  size,
  width = 24,
  height = 24,
}) {
  return (
    <svg
      role="img"
      aria-label={label}
      width={size ?? width}
      height={size ?? height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <use href={`${sprites}#${id}`} />
    </svg>
  );
}

SVGIcon.propTypes = {
  /** 아이콘 ID */
  id: oneOf(iconTypes).isRequired,
  /** 아이콘 레이블 (의미를 가질 경우 설정) */
  label: string.isRequired,
  /** 아이콘 너비, 높이 일괄 설정 */
  size: oneOfType([number, string]),
  /** 아이콘 너비 설정 */
  width: oneOfType([number, string]),
  /** 아이콘 높이 설정 */
  height: oneOfType([number, string]),
};
```

## 아토믹(Atomic) 컴포넌트 ⌁ Checker + SVG Sprites

```js
import styled from '@emotion/styled';
import { string, bool, func } from 'prop-types';
import sprites from '@/assets/sprites/view/sprites.svg';
import { theme } from '@/styles/theme';

/* -------------------------------------------------------------------------- */

export const Checker = ({ id, label, checked, loading, onChange, ...restProps }) => {
  return (
    <Checker.Wrapper checked={checked} loading={loading.toString()}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
        {...restProps}
      />
    </Checker.Wrapper>
  );
};

// prop 기본값 설정
Checker.defaultProps = {
  checked: false,
  loading: false,
  onChange: () => {},
};

// prop 타입 검사
Checker.propTypes = {
  /** Checker 컴포넌트 레이블 */
  label: string.isRequired,
  /** Checker 컴포넌트의 체크 상태 */
  checked: bool,
  /** Checker 컴포넌트의 로딩 상태 */
  loading: bool,
  /** Checker 컴포넌트의 체크 상태를 변경할 이벤트 핸들러 */
  onChange: func,
};

/* -------------------------------------------------------------------------- */

Checker.Wrapper = styled.span`
  position: relative;
  background: ${theme.colors.White};
  border-radius: 8px;

  :focus-within::before {
    outline: 3px solid ${theme.colors.focus[50]};
    border-radius: inherit;
  }

  & input {
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ checked, loading }) => {
      console.log({checked, loading});
      let id = 'unchecked';
      if (checked) id = 'checked';
      if (loading === 'true') id = 'loading';
      return `${sprites}#${id}`;
    }}) center center / cover;
  }
`;
```