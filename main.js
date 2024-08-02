// Thay đổi nội dung búc thư ở đây
var letterContent =" Bé iu ạ, tớ xin lỗi khi trong lúc ghen tớ có snghĩ thoáng qua và tớ đã bộc bạch nó ra làm bé bùn, bé ơi tớ xin lỗi bé nhìu, tớ sai lỗi ở tớ ạ, có thể dừng im lặng rùi chúng mình nói chuỵn hong ặ :((,nhớ bé nhìu lắm, tớ muốn nghe bé và tớ muốn thay đổi vì bé và cũng vì bé mà phát triển, tớ thương bé lắm, tớ muốn bé được iu theo cách của bé và tớ sẽ làm điều này, hmm tớ vẫn đợi bé, nhắn tớ bất kì lúc nào ạ, ANH THƯƠNG EM VÔ CÙNG TẬN💕, tớ sợ bé bùn,sợ bé bị tổn thương, tớ sợ mất bé vậy nên tớ muốn thương bé thật là nhìu và iu bé chiều bé hiểu bé thật nhìu👩‍❤️‍💋‍👨VỚI TỚ, BÉ LUÔN LÀ THIÊN THẦN,LÀ VŨ TRỤ CỦA TỚ MÃI MÃI LÀ THẾ"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
