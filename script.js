//各画像とモーダル要素を取得
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

//画像をクリックしたときにモーダルを表示
document.querySelectorAll('.gallery-image').forEach(image => {
    image.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src; //クリックされた画像のパスをモーダル画像に設定
    }
});

//モーダルを閉じる
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//モーダルの背景をクリックしたときに閉じる
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
