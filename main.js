// HTML要素の取得
const loadingElement = document.getElementById('loading');
const wineListElement = document.getElementById('wine-list');
const wineSelectorElement = document.getElementById('wine-selector');

// ワインの種類 リクエストパスと名前  
const wineTypes = [
  {key:'reds', name:'赤ワイン', color: '#ff0000'},
  {key:'whites', name:'白ワイン', color: '#ffffe0'},
  {key:'sparkling', name:'スパークリングワイン', color: '#D3D3D3'},
  {key:'rose', name:'ロゼワイン', color: '#FFC0CB'},
  {key:'dessert', name:'デザートワイン', color: '#ffa500'},
  {key:'port', name:'ポートワイン', color: '#cd5c5c'}
]

// ワイン情報を表示するメソッド
const displayWineBox = (wine) => {
  // 1つのワインを格納するBox要素
  const wineElement = document.createElement('div');
  wineElement.className = 'wine-box';
  
  // ワイン名
  const wineName = document.createElement('h2');
  wineName.textContent = wine.wine;
  wineName.className = 'wine-name';
  wineElement.appendChild(wineName);
  
  // ワイナリー
  const winery = document.createElement('p');
  winery.textContent = `【ワイナリー】 ${wine.winery}`;
  wineElement.appendChild(winery);
  
  // ワイナリーの場所
  const location = document.createElement('p');
  location.textContent = `【生産地】 ${wine.location.replace('\n·\n', ', ')}`;
  wineElement.appendChild(location);
  
  // 評価
  const ratings = document.createElement('p');
  ratings.textContent = `【評価】 星：${Math.floor(wine.rating.average)} | 評価数：${wine.rating.reviews}`;
  wineElement.appendChild(ratings);
  
  // 画像のはこ
  const wineImageBox = document.createElement('div');
  wineImageBox.className = 'wine-image';
  
  // 画像
  const wineImage = document.createElement('img');
  wineImage.src = wine.image;
  wineImage.alt = wine.wine;
  wineImageBox.appendChild(wineImage);
  wineElement.appendChild(wineImageBox);
  
  // ワインの情報をリストに追加
  wineListElement.appendChild(wineElement)
}

// メイン処理：ワインの種類を取得して、APIからワインの情報を取得して表示
const fetchAndDisplayWines = async () => {
  // ローディング表示, ワインリストを初期化
  loadingElement.style.display = 'block';
  wineListElement.innerHTML = '';
  try {
    // selectorからワインの種類を取得
    const selectedWine = document.querySelector('input[name="wine"]:checked').id;
    // APIから取得して表示
    const response = await fetch(`https://api.sampleapis.com/wines/${selectedWine}`);
    const wines = await response.json();
    wines.forEach(displayWineBox);

    // 背景色を選択されたワインの種類に合わせて変更
    const selectedWineType = wineTypes.find(wineType => wineType.key === selectedWine);
    document.body.style.backgroundColor = selectedWineType.color;

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // 絶対に実行される。
    loadingElement.style.display = 'none';
  }
}









// ワインの種類ごとにラジオボタンとラベルを作成
for (const wineType of wineTypes) {
  const radioButton = document.createElement('input');
  radioButton.type = 'radio';
  radioButton.id = wineType.key;
  radioButton.name = 'wine';
  // デフォルト
  if (wineType.key === 'reds') {
      radioButton.checked = true;
  }
  const label = document.createElement('label');
  label.htmlFor = wineType.key;
  label.textContent = wineType.name;

  radioButton.addEventListener('click', fetchAndDisplayWines);
  wineSelectorElement.appendChild(radioButton);
  wineSelectorElement.appendChild(label);
  // ラジオボタンクリックで、表示切り替えロジックを呼び出す
}


// 初期表示時にワインリストを表示
fetchAndDisplayWines();
