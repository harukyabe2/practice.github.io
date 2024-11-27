document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.getElementsByClassName("close")[0];

    const body = document.body;

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.onclick = function() {
            modal.classList.add('show');
            modal.style.display = "flex";
            modalImg.src = this.src;
            body.style.overflow = "hidden";
        };
    });

    if (closeBtn) { // 要素が存在する場合のみイベントを設定
        closeBtn.onclick = function() {
            modal.classList.remove('show');
            modal.style.display = 'none';
            body.style.overflow = "auto";
        };
    }

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            modal.style.display = "none";
            body.style.overflow = "auto";
        }
    };
});
