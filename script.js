//各画像とモーダル要素を取得
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.getElementsByClassName("close")[0];

const body = document.body;

//画像をクリックしたときにモーダルを表示
document.querySelectorAll('.gallery-image').forEach(image => {
    image.onclick = function() {
        modal.classList.add('show');
        modal.style.display = "flex";
        modalImg.src = this.src; //クリックされた画像のパスをモーダル画像に設定
        body.style.overflow = "hidden"; //背景スクロールを無効化
    }
});

//モーダルを閉じる
closeBtn.onclick = function() {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
    body.style.overflow = ""; //スクロールを元に戻す
}

//モーダルの背景をクリックしたときに閉じる
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
