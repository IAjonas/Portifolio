
let button = document.getElementById("botao");
const list = document.getElementById("menu-interativo");



    list.style.display = "none";

    button.addEventListener("click",(event)=>{
        if (list.style.display == "none"){
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    });
    
    function toggleDialog(subtnId, dialogId, otherDialogId) {
    const subtn = document.getElementById(subtnId);
    const dialog = document.getElementById(dialogId);
    const otherDialog = document.getElementById(otherDialogId);

        dialog.style.display = "none";

    subtn.addEventListener("click", (event) => {
     if (dialog.style.display == "none") {
    dialog.style.display = "block";
    if (otherDialog.style.display == "block") {
     otherDialog.style.display = "none";
     }
    } else {
     dialog.style.display = "none";
     }
    });
    }
// chame a função com os IDs específicos para cada caixa de diálogo
        toggleDialog("ajuda", "dialog", "walkman1");
        toggleDialog("walkman", "walkman1", "dialog");


    
