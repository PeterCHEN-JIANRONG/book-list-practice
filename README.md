# book-list

創順科技 UNNO Technology - [面試考題](https://github.com/UnnotechSoftware/unnotech-frontend-recruit)

# 頁面

- [首頁](https://peterchen-jianrong.github.io/book-list-practice/#/books)

## 說明

實作：書本列表、新增、編輯

使用技術：Vue3、Tailwindcss、vue-router、Composition API

## 專案的架構、邏輯說明

路由規劃：
- `/books`：書籍列表頁
- `/books/:bookId`：書籍詳細頁 & 編輯書籍
- `/newBook`：新增書籍頁

編輯書籍做一個 form 表單的切換，就不再另外新增一頁，
因為沒有重複的 header、footer、sidebar，就沒有使用朝狀路由。
列表頁、詳細頁比較單純，在 onMounted取得資料後做渲染，
比較需要注意的是編輯書籍，用深拷貝另存資料至變數 tempBook，才不會有編輯取消時，造成畫面誤更改的情況。

## 你對於所有使用到的第三方 library 的理解，以及為何使用它

有使用到的第三方套件為：vue-axios、vee-validate、vue-sweetalert2、tailwindcss
- vue-axios: 我的理解是經過 vue 包裝過的 axios，可以用 vue 的方式引入，不用也可以，就是要在每個 .vue 檔做引入。

- tailwindcss: 極致化的將樣式拆分成類別，每個 css style 都可以是一個 class，非常方便。
- vee-validate: 資料驗證的套件，可以搭配 @vee-validate/i18n 載入語系、@vee-validate/rules 載入規則，[規則參考](https://vee-validate.logaretm.com/v4/guide/global-validators#available-rules)
- vue-sweetalert2: [參考範例](https://sweetalert2.github.io/)，改成自己要的樣式。

  我對第三方套件的看法：基本上套件能完成的，我會盡可能使用套件，在修改成自己要的樣子，如果沒辦法才會自己手刻。

## 在這份專案中你遇到的困難、問題，以及解決的方法

導入 vee-validate 時，一度有程式錯誤卡住，解了好久不知道原因，最後重啟就沒事了，我自己猜測，可能是要載入某些資源，或者重新 build 某些資源的關係。


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
