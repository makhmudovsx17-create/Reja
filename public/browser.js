console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return`<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button 
                    data-id="${item._id}" 
                    class="edit-me btn btn-secondary btn-sm mr-1"
                    >
                        Ozgartirish
                    </button>
                    <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
                </div>
            </li>`;
}

let createField = document.getElementById('create-field');

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
    e.preventDefault(); // default tarzda hech qaysi URL ga o'tib ketmaydi

    axios
    .post("/create-item", { reja: createField.value }) // CREATE-FORM submit qilingan payti CREATE-FIELD yani inputga kiritilgan narsani VALUEsini REJAga tenglashtirib AXIOS orqali post qilyapmiz
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    }) // agar muvafaqiyatli bo'lsa DATA dan foydalanamiz
    .catch((err) => {
        console.log("Iltimos qatadan harakat qiling!");
    }); // agar muvafaqiyatli bo'lmasa ERROR holatda nima qilishni belgilab olamiz

}); // formamiz submit bo'lganda function ishga tishishi kerak