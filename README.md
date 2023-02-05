# 원티드 프리온보딩 프론트엔드 인턴십 선발 과제

## 0. 목차

- [1. 프로젝트 소개](#1-프로젝트-소개)
  - [🔗 배포 링크](#배포-링크)
- [2. 실행 방법](#2-실행-방법)
- [3. 구현한 기능 및 데모 영상](#3-구현한-기능-및-데모-영상)
  - [로그인/회원가입](#로그인회원가입)
  - [TODO LIST](#todo-list)
- [4. 사용한 기술](#4-사용한-기술)
- [5. 폴더 구조](#5-폴더-구조)
- [6. 과제 진행 시 주안점](#6-과제-진행-시-주안점)

## 1. 프로젝트 소개

### [🔗 배포 링크](https://jaypedia.github.io/wanted-pre-onboarding-frontend)

이 프로젝트는 다양한 기업의 기술과제를 수행할 수 있는 [원티드 프리온보딩 프론트엔드 인턴십](https://www.wanted.co.kr/events/pre_ob_fe_9)의 선발 과제입니다.

<br >

## 2. 실행 방법

```jsx
1. git clone https://github.com/jaypedia/wanted-pre-onboarding-frontend.git
2. cd wanted-pre-onboarding-frontend
3. npm install
4. npm start
```

<br >

## 3. 구현한 기능 및 데모 영상

> [배포 링크](https://jaypedia.github.io/wanted-pre-onboarding-frontend)로도 구현한 기능을 확인하실 수 있습니다.

### 로그인/회원가입

![Demo- login](https://user-images.githubusercontent.com/85419343/216825962-a08fe165-e20e-49f8-8159-f914bfa9696a.gif)

#### [EPIC ISSUE 1. 로그인/회원가입 기능 구현](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/2)

- [x] Assignment 1. 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사 기능 구현 [#4](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/4)
- [x] Assignment 2. 회원가입 기능 구현 [#5](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/5)
- [x] Assignment 3. 로그인 기능 구현 [#6](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/6)
- [x] Assignment 4. 로그인 여부에 따른 리다이렉트 처리 구현 [#7](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/7)

### TODO LIST

![Demo - todo](https://user-images.githubusercontent.com/85419343/216826017-9dc122aa-e048-491c-84f6-e2222571222b.gif)

#### [EPIC ISSUE 2. TODO LIST CRUD 기능 구현](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/3)

- [x] Assignment 5. 투두 리스트 목록 구현 [#8](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/8)
- [x] Assignment 6. 투두 추가 기능 구현 [#9](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/9)
- [x] Assignment 7. 투두 완료 여부 수정 가능하게 구현 [#10](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/10)
- [x] Assignment 8. 투두 우측에 수정/삭제 버튼 구현 [#11](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/11)
- [x] Assignment 9. 투두 리스트 삭제 기능 구현 [#12](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/12)
- [x] Assignment 10. 투두 리스트 수정 기능 구현 [#13](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/13)

<br >

## 4. 사용한 기술

> 과제 제약 조건으로 React-Query, Redux 등의 라이브러리는 허용되지 않았습니다.

### React

- 컴포넌트 단위로 개발하여 효율적으로 UI를 만들기 위해 사용했습니다. 간결하고 가독성이 좋은 Function component로 개발하였습니다.
- 과제의 요구 조건에 맞춰 [CRA](https://create-react-app.dev/)로 개발 환경을 세팅했습니다. 세팅 과정은 [#1 이슈](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/1)에 정리하였습니다.

### React Router DOM

- 직관적인 API로 SPA를 구축할 때 라우팅을 수월하게 할 수 있어 사용했습니다. React Router의 [Main Concepts](https://reactrouter.com/en/main/start/concepts) 문서에서는 핵심 개념을 깊게 다루고 있습니다. 특히 v6.4부터 제공되는 API인 [loader](https://reactrouter.com/en/main/route/loader)를 활용하여 페이지를 렌더링하기 전에 로직을 수행하거나 컴포넌트에 데이터를 제공할 수 있어 유용했습니다.

### Axios

- 응답 데이터를 JSON 형식으로 변환해 주는 편리한 기능 외에 다수의 기능을 지원해 주는 Axios를 활용했습니다.

### gh-pages(GitHub Pages)

- 배포를 위해 사용한 패키지입니다. 배포 과정은 [#14 이슈](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues/14)에 정리하였습니다.

<br >

## 5. 폴더 구조

```
📦src
 ┣ 📂apis # 백엔드 API와 통신하는 로직을 담은 폴더입니다.
 ┣ 📂components # 재사용이나 큰 컴포넌트를 나누기 위한 목적으로 만든 컴포넌트들을 모아놓은 폴더입니다.
 ┣ 📂constants # 상수를 관리하는 폴더입니다.
 ┣ 📂context # Context API를 활용한 로직을 담은 폴더입니다.
 ┣ 📂hooks # custom hook을 모아놓은 폴더입니다.
 ┣ 📂pages # 각 route 별 페이지를 모아놓은 폴더입니다. loader가 필요한 경우 별도로 파일을 만들었습니다.
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Root
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜loader.js
 ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜loader.js
 ┃ ┗ 📜index.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜router.js
```

<br >

## 6. 과제 진행 시 주안점

### Error Handling

![Error Handling Demo](https://user-images.githubusercontent.com/85419343/216826150-68218c3e-dab3-46b0-9304-b7ab4890f689.gif)

- 에러 발생 시 보여줄 수 있는 페이지를 만들어 routes의 errorElement에 설정하였습니다.
- 토큰 존재 여부를 확인하여 로그인 했을 때와 하지 않았을 때 다른 버튼을 보여주도록 하여 조금 더 편리하게 원하는 페이지로 이동할 수 있도록 구현해 보았습니다.
  - 로그인 한 경우 : Todo List 페이지로 갈 수 있는 버튼, 뒤로가기 버튼
  - 로그인 하지 않은 경우 : 로그인/회원가입 버튼, 뒤로가기 버튼

### 이슈로 요구사항 정리 및 커밋 관리

- 과제 요구사항을 [이슈](https://github.com/jaypedia/wanted-pre-onboarding-frontend/issues?q=is%3Aissue+is%3Aclosed)에 등록하여 관리하였습니다.
- 큰 단위의 요구사항을 `EPIC`으로 분류 후, 하위에 작은 요구사항들을 분배했습니다.
- 커밋에도 이슈 넘버를 명시하여, 커밋을 푸시하면 해당 이슈에 커밋이 보일 수 있어서 해당 이슈에 연관된 커밋을 한 눈에 확인하기 편리합니다.

### Clean Code의 원칙

- 변수명과 함수명을 보았을 때 바로 어떤 역할을 하는 것인지 알 수 있도록 직관적인 이름을 쓰려고 노력했습니다.
- 예를 들어, [useCheckAccount](https://github.com/jaypedia/wanted-pre-onboarding-frontend/blob/main/src/hooks/useCheckAccount.jsx)라는 커스텀 훅 내부의 함수들의 이름을 서술적으로 지어 각 함수가 어떤 역할을 하는지 쉽게 알 수 있습니다.
