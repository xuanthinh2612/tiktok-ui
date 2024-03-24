# Getting Started with Create React App

# =============Cac buoc tao base 1 du an reactjs==============

# 1. npx create-react-app app-name

# 2. Tạo một file .env.local (optional)

    - đổi port: thêm PORT=3001

# 3. Cài đặt thu vien de customize webpack customize-cra (tùy chỉnh/override webpack cấu hình webpack ) (link: https://github.com/arackaf/customize-cra)

    - npm install customize-cra react-app-rewired --dev



    - tao file config-overrides.js cung cap voi src

    - creat config file: Create a config-overrides.js file in the root directory
      (https://github.com/timarney/react-app-rewired/)
    -   2. Create a config-overrides.js file in the root directory

    - add cac function can config duoc ho tro boi customize-cra vd: useBabelrc
    /_ config-overrides.js _/

    const { override, useBabelRc } = require('customize-cra');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    module.exports = override(useBabelRc());

    - 3) 'Flip' the existing calls to react-scripts in npm scripts for start, build and test

# 4. Cài đặt babel-plugin-module-resolver (de cho dong code import ngan hon) (https://github.com/tleunen/babel-plugin-module-resolver)

use import '~/abc' instead of inport ../../../abc
~ equal /src

    - npm install --save-dev babel-plugin-module-resolver

    - tao file .babelrc va copy noi dung vao file
        nội dung:

        {
        "plugins": [
        ["module-resolver", {
                    "alias": {
                "~": "./src",
            }
        }]
        ]
        }


    Editors autocompletion

    - tao file jsconfig.json cung cap src va them noi dung file

    jsconfig.json

        {
        "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "~/_": ["src/_"]
        }
        }
        }

# 5. Cài đặt và cấu hình Prettier

    - tao file .prettierrc
    - tao file .vscode/settings.json
    - cai dat prettier extendtion
    - bat auto format on save CTRL + , va check on vao Editor: Format On Save

# 6. Cấu hình sử dụng CSS/SASS (Optional)

    - tao Global style component
    - cai thu vien SASS `npm i -D sass` cho dev
    - reset CSS normalize.css `npm i normalize.css`
    - Default CSS: font-family, font-size, line-height

# 7. Cấu hình Router/layout cho dự án

    - Cài đặt react-router-dom: npm i react-router-dom

# 8. Cai thư viện classNames

    - npm i classnames

# 7. cài font awesome (Optional)

    - copy vao package.json và run npm i

# 8. cài thư viện tippyjs react (drop list for search results) - # npm

    - npm i @tippyjs/react

# 9. Cài thư viện axios de call api thong qua instance

    - npm install axios

    - Tách axios sang file util de call api
    - service sẽ gọi file util và ở các component sẽ gọi service

# 10. propType (thư viện để validate các prop cho component)

    - nếu sử dụng create-react-app để tạo dự án thì không cần cài thêm

    ( - npm install --save prop-types)

# Chú ý:

extention:

-   simpleReact Snipest : để viết tắt các import, tạo mới hàm...
-   ESLint pretier : format code

-   NavLink trong react tự động thêm active class vào trong link được chọn.
    sử dụng NavLink luôn cung cấp biến navData để check có active hay không: cách dùng: className={(nav) => cx("className-1", {active: nav.isActive})} và css cho class active trong module css

# ==================HOOK========================================

# useState(initValue)

# useEffect(callback, [dependencies ])

    - hàm cleanup nằm sau return. để clean up callback lần trước đó

    - call back luôn được gọi mỗi khi mounted component, và sẽ gọi call back mỗi khi component re-render dựa vào dependencies

        Thứ tự chạy:
        1. Cập nhật state
        2. Cập nhật DOM
        3. Re-render UI
        4. Gọi cleanUp nếu dependencies thay đổi
        5. Gọi callback

# useLayoutEffect(callback, [dependencies ])

    - Dùng gần giống với useEffect tuy nhiên thứ tự renderUI khác nhau.
        Thứ tự chạy:
        1. Cập nhật state
        2. Cập nhật DOM
        3. Gọi cleanUp nếu dependencies thay đổi
        4. Gọi callback
        5. Re-render UI

# useRef Tham chiếu component ra ngoài Component đó (component con có thể truyền data ra ngoài để component cha tương tác trực tiếp với giá trị ref đó)

    Cách Dùng:

        const inputRef = useRef();

        <input ref={inputRef}>

# HOC React memo (nếu không dùng memo thì mỗi lần component cha re-render thì componet con chắc chắn sẽ re-render)

    - Dùng để hạn chế việc re-render không đáng có (component cha re-render dẫn đến component con cũng re-render)
    - Cách dùng:

    export default React.memo(ComponetChildren) trong ComponetChildren

    - memo kiểm tra props của component nếu có thay đổi thì mới re-render nếu không có thay đổi thì bỏ qua re-render

# useCallback(callback, [dependencies ]) (thường dùng kết hợp memo)

    - Trong trường hợp prop truyền vào component con là một hàm, mỗi lần componet cha re-render thì sẽ tạo ra một reference mới => do đó memo sẽ hiểu nhầm là prop thay đổi dẫn tới việc re-render component con => để khắc phục có thể dùng useCallBack

    - trong component gọi usecallback:
    const functionName = useCallback(...) thì use call back sẽ trả về cho biến functionName 1 reference tới địa chỉ ô nhớ của hàm bên trong useCallback.
    khi đó, memo sử dụng trong component con sẽ check prop truyền vào và hiểu prop không thay đổi và sẽ không re-render lại component con nữa.

# useMemo(callbackFuntion, [dependencies ]) (DÙng để tránh thực hiện 1 logic nào đó không cần thiết)

-   một logic nào đó sẽ phải chạy lại mỗi lần re-render/updateSate, tuy nhiên logic đó chỉ cần chạy trong một số trường hợp cần thiết => thì có thể sử dụng useMemo trong chính component hiện tại đó. useMemo sẽ chỉ chạy callback khi deps thay đổi

# useReducer() sử dụng giống như useState nhưng cho những trường hợp phức tạp hơn

-   cần truyền vào reducer và action

# useContext() giúp truyền dữ liệu từ component cha xuống component con cháu không cần thông qua props và không cần component trung gian

    sử dụng Provider để tuyền value xuống và dùng Consumer để nhận value

    Cách dùng:
        ở componenent truyền value:
            import {createContext} from React
            const ContextVar = createContext()
            <ContextVar.Provider value="xxx"></ContextVar.Provider>

        ở component nhận value
            import useContext from React
            const recievedValue = useContext(ContextVar)

            => recievedValue chính bằng "xxx" được truyền từ bên trên.

# HOC forwardRef(ComponentName)

    - Trong React Component element khác với element html thuần(div, span, img...), không thể trực tiếp nhận vào prop ref được.
    => vì vậy cần phải sử dụng forwardRef để có thể sử dụng khả năng ref này.
    Cách dùng: trong component con
        import {forwardRef} from react
         sử dụng export default forwaradRef() để nhận vào ref từ ngoài vào.

# useImperativeHandle hook

    sử dụng để hạn chế/kiểm soát sự reference của Component cha vào con. tránh trường hợp xóa/làm hại component con từ ngoài thằng cha.

    Cách dùng:

    <!-- App

    const videoRef = useRef()

    const handlePlay = () => {
        // videoRef.current lúc này chỉ nhận được là 1 object từ useImperativeHandle trả
        videoRef.current.play()
    }

    <Video ref={videoRef}> -->

    <!-- function Video(prop, ref) {
            const videoRef = useRef();
            useImperativeHandle(ref, ()=> {
                play() {
                    videoRef.play();
                },

                pause() {
                    videoRef.pause();
                }

            })

            return(
                <video ref={videoRef}>
            )
        }

    export default forwardRef(Video) -->
