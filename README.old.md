# goit-react-hw-09-react-hooks

1. npx create-react-app . --use-npm
2. npm i prop-types
3. линтинг npm install --save-dev prettier husky lint-staged
4. Проверяем настройки VSCode(autoSeve - onFocusChange; formatOnSave - вкл;
   codeActionsOnSave - all)
5. Добавляем настройки в
   проект(https://github.com/goitacademy/react-lint-config)
6. настраиваем абсолютные импорты
   (https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
   (создаем файл jsconfig.json,вставляем... после чего можно писать import
   Button from 'components/Button'; без ../../../)
7. Ставим пакет [https://reactrouter.com/core/guides/quick-start] - (npm install
   react-router-dom)
8. Анимированная стилизация npm install react-transition-group
9. Redux - npm i redux
10. React-redux - npm i react-redux
11. Redux DevTools (http://extension.remotedev.io/) - npm install --save-dev
    redux-devtools-extension
12. В файл с редьюсером import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension'; const store
    = createStore(reducer, composeWithDevTools());
13. npm install @reduxjs/toolkit
14. npm i axios
15. npm i classnames
16. npm i redux-logger
17. npm i redux-persist

---

16. deploy on netlify
17. В корне создать файл netlify.toml - ( [build] publish = "build"

    [[redirects]] from = "/" to = "/index.html" status = 200)

18. npm install netlify-cli -g
19. netlify login
20. Authorized
21. package.json ("predeploy": "npm run build", "deploy": "netlify deploy -p")
22. npm run deploy
23. Create (enter), enter, name project
24. netlify open --site

---

18. deploy on gh-pages
19. npm run build
20. "homepage": "https://myusername.github.io/my-app",
21. npm run build
22. npm install --save gh-pages
23. "predeploy": "npm run build", "deploy": "gh-pages -d build",
24. npm run deploy

25. React#7
26. Введение в хуки [https://ru.reactjs.org/docs/hooks-intro.html]
27. Хуки: ответы на вопросы [https://ru.reactjs.org/docs/hooks-faq.html]
28. The Guide To Learning ReactHooks [https://www.telerik.com/kendo-react-ui/react-hooks-guide/]
29. Thinking in React Hooks [https://wattenberger.com/blog/react-hooks]
30. A complete guide to useEffect [https://overreacted.io/a-complete-guide-to-useeffect/]
31. Hooks examples [https://codesandbox.io/s/z3ow32rk43]
32. React router hooks [https://dev.to/finallynero/hooks-introduced-in-react-router-v5-1-7g8]
33. React use [https://github.com/streamich/react-use]


34. React#18 Вебинар 17
35.  react-query - хук для НТТР-запросов [https://github.com/tannerlinsley/react-query]
36. react-use - библиотека кастомных хуков [https://github.com/streamich/react-use]
37. Сайт для проектирования компонентов [https://storybook.js.org/]
38. 0.06 Counter (useState)
39. 0.21 SingupForm (switch)
40. 0.31 ColorPicker (работа с пропсами)
41. 0.39 Counter (useEffect)
42. 0.53 ColorPicker (Pure Component ft. memo)
43. 0.54 Clock
44. 1.05 useRef
45. 1.11 NewsSearchForm
46. 1.14 News
47. 1.39 userMenu (Context)

