
function selected(no, selectNo) {
    if (no < 5) {
        document.getElementById("q" + no).classList.add('hide_move');
        document.getElementById("q" + no).classList.remove('show_move');
        document.getElementById("q" + (no + 1)).classList.add('show_move');
    } else {
        document.getElementById("select").classList.add('hide_move');
        switch (selectNo) {
            case 1:
                document.getElementById("result_name").innerText = "エレン";
                document.getElementById("result_img").src = "img/img_chousaheidan_01.png";
                break;
            case 2:
                document.getElementById("result_name").innerText = "ミカサ";
                document.getElementById("result_img").src = "img/img_chousaheidan_02.png";
                break;
            case 3:
                document.getElementById("result_name").innerText = "アルミン";
                document.getElementById("result_img").src = "img/img_chousaheidan_03.png";
                break;
            case 4:
                document.getElementById("result_name").innerText = "リヴァイ";
                document.getElementById("result_img").src = "img/img_chousaheidan_04.png";
                break;
            default:

        }
        document.getElementById("result").classList.add('show_move');
    }
}