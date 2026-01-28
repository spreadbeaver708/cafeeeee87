// ===== メニュー情報 =====
const menus = [
  {
    name: "コーヒー",
    price: 450,
    desc: "毎朝豆を挽いて淹れる一杯",
    types: ["ブレンド", "アメリカン", "アイス"],
    image: "images/coffee.png",
    hover: "images/coffee_hover.png"
  },
  {
    name: "スコーン",
    price: 300,
    desc: "外はさっくり中はしっとり",
    types: ["プレーン", "チョコ"],
    image: "images/scone.png",
    hover: "images/scone_hover.png"
  },
  {
    name: "固めプリン",
    price: 350,
    desc: "昔ながらの喫茶店プリン",
    types: ["カラメル"],
    image: "images/pudding.png",
    hover: "images/pudding_hover.png"
  }
];

// ===== 表示する場所 =====
const menuList = document.getElementById("menuList");

// ===== メニューを画面に出す =====
menus.forEach(menu => {
  const item = document.createElement("div");
  item.className = "menu-item";

  item.innerHTML = `
    <img src="${menu.image}">
    <h3>${menu.name}</h3>
    <p>${menu.desc}</p>
    <span>${menu.price}円</span>
    <div class="menu-detail hidden">
      ${menu.types.join(" / ")}
    </div>
  `;

  const img = item.querySelector("img");

  // マウスを乗せたら画像変更
  img.addEventListener("mouseenter", () => {
    img.src = menu.hover;
  });

  // マウスを離したら元に戻す
  img.addEventListener("mouseleave", () => {
    img.src = menu.image;
  });

  // クリックしたら種類表示
  item.addEventListener("click", () => {
    item.querySelector(".menu-detail").classList.toggle("hidden");
  });

  menuList.appendChild(item);
});
// その他メニュー
const moreBtn = document.getElementById("moreBtn");
const moreArea = document.getElementById("moreMenuArea");

moreBtn.addEventListener("click", () => {
  moreArea.classList.toggle("hidden");

  if (moreArea.innerHTML === "") {
    moreArea.innerHTML = `
      <div class="menu-item">
        <h3>トースト</h3>
        <p>バターたっぷり</p>
        <span>250円</span>
      </div>
      <div class="menu-item">
        <h3>ナポリタン</h3>
        <p>昔ながらの味</p>
        <span>700円</span>
      </div>
    `;
  }
});
