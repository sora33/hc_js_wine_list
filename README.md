## ワインの一覧を取得するAPIを叩く
Vanila JSでワインを一覧表示するAPIを叩いて、表示しましょう。
API: https://sampleapis.com/api-list/wines

## 仕様
- ページを開くと、デフォルトで赤ワイン一覧が表示される。縦3列に表示。細かいCSSは各人にお任せ。
- ラジオボタンを表示し、選択すると、選択した種類のワイン一覧が表示される。
  （選択するたびに、asyn/awaitでapiを叩くイメージ。）
  選択できる項目は以下の通り。
  - 赤ワイン
  - 白ワイン
  - スパークリング
  - デザート
  - ポート
- ラジオボタンを押して、一覧が表示される間は、ローディング画面を表示。
- 表示される内容としては、以下の通り。
  - 名前
  - ワイナリー
  - 住所
  - 星の数（小数点で取得できるが、切り捨てで整数とし、星の画像で表現する）
  - 評価した人数
  - 画像


## 課題(終了条件)

- `js_wine_list`リポジトリを作成してpull requestを作成すること
- Github Pagesにデプロイすること
- pull requestにデプロイしたGithub PagesのURLを記載してpull requestのURLを提出すること

## メモ
- wineリストの仕様（赤ワインの場合）
  - リクエストパス：https://api.sampleapis.com/wines/reds
  - 結果
    ```json
    [
      {
        "winery": "Maselva",
        "wine": "Emporda 2012",
        "rating": {
          "average": "4.9",
          "reviews": "88 ratings"
        },
        "location": "Spain\n·\nEmpordà",
        "image": "https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg",
        "id": 1
      },
      {
        "winery": "Ernesto Ruffo",
        "wine": "Amarone della Valpolicella Riserva N.V.",
        "rating": {
          "average": "4.9",
          "reviews": "75 ratings"
        },
        "location": "Italy\n·\nAmarone della Valpolicella",
        "image": "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
        "id": 2
      },
    ]
    ```
