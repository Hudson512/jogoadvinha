
//Declaração de variaveis globais


const btnComecarJogo = document.querySelector("#btn_start")
const arr_area = [
    document.querySelector("#area_1"),
    document.querySelector("#area_2"),
    document.querySelector("#area_3"),
    document.querySelector("#area_4"),
    document.querySelector("#area_5"),
    document.querySelector("#area_6")
]
let randomNumber3
let numeroDeAcertos = 0
let numeroDeErros = 0
let sDificuldade = document.querySelectorAll(".navigation .bar")

let main = document.querySelector(".main")


//Adicionando eleventos as Tags HTML
btnComecarJogo.addEventListener('click', start)



sDificuldade[0].addEventListener("click", select_dificul_0)
sDificuldade[1].addEventListener("click", select_dificul_1)
sDificuldade[2].addEventListener("click", select_dificul_2)

function select_dificul_0() {
    sDificuldade[0].style.border = "2px solid rgb(77, 179, 30)"
    sDificuldade[1].style.border = "2px solid #FFF"
    sDificuldade[2].style.border = "2px solid #FFF"

    sDificuldade[0].style.backgroundColor = "rgb(77, 179, 30)"
    sDificuldade[1].style.backgroundColor = "#FFF"
    sDificuldade[2].style.backgroundColor = "#FFF"
}
function select_dificul_1() {
    sDificuldade[0].style.border = "2px solid #FFF"
    sDificuldade[1].style.border = "2px solid rgb(77, 179, 30)"
    sDificuldade[2].style.border = "2px solid #FFF"

    sDificuldade[0].style.backgroundColor = "#FFF"
    sDificuldade[1].style.backgroundColor = "rgb(77, 179, 30)"
    sDificuldade[2].style.backgroundColor = "#FFF"
}
function select_dificul_2() {
    sDificuldade[0].style.border = "2px solid #FFF"
    sDificuldade[1].style.border = "2px solid #FFF"
    sDificuldade[2].style.border = "2px solid rgb(77, 179, 30)"

    sDificuldade[0].style.backgroundColor = "#FFF"
    sDificuldade[1].style.backgroundColor = "#FFF"
    sDificuldade[2].style.backgroundColor = "rgb(77, 179, 30)"
}



function start() {
    //Declaração de variaveis locais
    const procurarO = document.querySelector(".procura")
    let arr = []
    let randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    const acertos = document.querySelector("#acertos")
    const erros = document.querySelector("#erros")

    let area_nivel = document.querySelector(".area_nivel")

    const nivel_1 = document.querySelector("#nivel1").checked
    const nivel_2 = document.querySelector("#nivel2").checked
    const nivel_3 = document.querySelector("#nivel3").checked


    //Escolha de nível de dificuldade

    if (nivel_1) {
        setTimeout(() => {
            for (let i = 0; i < arr_area.length; i++) {
                if (i == 0 || i == 2 || i == 4) {
                    continue
                }
                
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.color = "black"
                arr_area[i].style.border = "2px solid white"
            }

            arr_area[0].style.color = "rgba(255, 255, 255, 0.05)"
            arr_area[2].style.color = "rgba(255, 255, 255, 0.05)"
            arr_area[4].style.color = "rgba(255, 255, 255, 0.05)"
            sDificuldade[1].style.display = "none"
            sDificuldade[2].style.display = "none"
        }, 300);

    } else if (nivel_2) {
        setTimeout(() => {
            for (let i = 0; i < arr_area.length; i++) {
                if (i == 4) {
                    continue
                }
                
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.color = "black"
                arr_area[i].style.border = "2px solid white"
            }

            arr_area[4].style.color = "rgba(255, 255, 255, 0.05)"
            sDificuldade[0].style.display = "none"
            sDificuldade[2].style.display = "none"
        }, 300);


    } else if (nivel_3) {
        setTimeout(() => {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.color = "black"
                arr_area[i].style.border = "2px solid white"
            }

            sDificuldade[0].style.display = "none"
            sDificuldade[1].style.display = "none"
        }, 300);

    } else {
        alert("Selecione um nível antes de começar o Jogo")
        window.location.reload()
    }

    //Adicionando eleventos as Tags HTML
    arr_area[0].addEventListener('click', mostrarNumero_0)
    arr_area[1].addEventListener('click', mostrarNumero_1)
    arr_area[2].addEventListener('click', mostrarNumero_2)
    arr_area[3].addEventListener('click', mostrarNumero_3)
    arr_area[4].addEventListener('click', mostrarNumero_4)
    arr_area[5].addEventListener('click', mostrarNumero_5)

    //Passando o valor local para uma variavel global
    randomNumber3 = randomNumber2


    //Imprimindo na tela de usuario o valor de acertos e de erros
    acertos.innerHTML = "Nº de acertos: " + numeroDeAcertos
    erros.innerHTML = "Nº de erros: " + numeroDeErros
    area_nivel.style.display = "none"

    //Main borda volta a cor normal
    setTimeout(() => {
        main.style.border = "2px solid rgb(66, 34, 34)"
        arr.forEach(function (e, i) {
            arr_area[i].innerHTML = e
            arr_area[i].style.backgroundColor = "black"
            arr_area[i].style.border = "2px solid white"
        });
    }, 300);



    //Add valores na array "arr"
    for (let i = 5; i >= arr.length;) {

        let randomNumber = parseInt(Math.random() * 7)

        //Condição dizendo se não existe um determinado valor no arr, então add esse novo valor no array 
        if (arr.indexOf(randomNumber) < 0) {
            if (randomNumber >= 1 && randomNumber <= 6) {
                arr.push(randomNumber)
            }
        }
    }






    if (numeroDeAcertos >= 10) {
        setTimeout(() => {
            if (confirm("🙂 VOCÊ VENCEU, DESEJA JOGAR NOVAMENTE?")) {
                window.location.reload()
            }
        }, 300);

    } else {
        setTimeout(() => {
            procurarO.innerHTML = "Onde está o número " + randomNumber2 + " ?"

            switch (randomNumber2) {
                case 1:
                    procurarO.style.color = "#a52a2a"
                    break;
                case 2:
                    procurarO.style.color = "#a54b2a"
                    break;
                case 3:
                    procurarO.style.color = "#000"
                    break;
                case 4:
                    procurarO.style.color = "#fff"
                    break;
                case 5:
                    procurarO.style.color = "#a52a68"
                    break;
                case 6:
                    procurarO.style.color = "#452aa5"
                    break;
            }

            setTimeout(() => {
                btnComecarJogo.innerHTML = "Pedir novo número"
            }, 100);

        }, 200);
    }


    if (numeroDeErros >= 10) {
        setTimeout(() => {
            if (confirm("😥 VOCÊ PERDEU, DESEJA JOGAR NOVAMENTE?")) {
                window.location.reload()
            }
        }, 300);

    }

}



function mostrarNumero_0() {

    setTimeout(() => {
        if (randomNumber3 == Number(arr_area[0].textContent)) {
            setTimeout(() => {
                arr_area[0].style.color = "white"
                arr_area[0].style.border = "2px solid rgb(77, 179, 30)"
                numeroDeAcertos = numeroDeAcertos + 1
                main.style.border = "2px solid rgb(77, 179, 30)"
                start()
            }, 200);

        } else {
            arr_area[0].style.color = "white"
            arr_area[0].style.border = "2px solid rgb(208, 25, 25)"
            numeroDeErros = numeroDeErros + 1
            main.style.border = "2px solid rgb(208, 25, 25)"
            start()
        }
    }, 200);


}

function mostrarNumero_1() {

    setTimeout(() => {
        if (randomNumber3 == Number(arr_area[1].textContent)) {
            setTimeout(() => {
                arr_area[1].style.color = "white"
                arr_area[1].style.border = "2px solid rgb(77, 179, 30)"
                numeroDeAcertos = numeroDeAcertos + 1
                main.style.border = "2px solid rgb(77, 179, 30)"
                start()
            }, 200);

        } else {
            arr_area[1].style.color = "white"
            arr_area[1].style.border = "2px solid rgb(208, 25, 25)"
            numeroDeErros = numeroDeErros + 1
            main.style.border = "2px solid rgb(208, 25, 25)"
            start()
        }
    }, 200);
}

function mostrarNumero_2() {

    setTimeout(() => {
        if (randomNumber3 == Number(arr_area[2].textContent)) {
            setTimeout(() => {
                arr_area[2].style.color = "white"
                arr_area[2].style.border = "2px solid rgb(77, 179, 30)"
                numeroDeAcertos = numeroDeAcertos + 1
                main.style.border = "2px solid rgb(77, 179, 30)"
                start()
            }, 200);

        } else {
            arr_area[2].style.color = "white"
            arr_area[2].style.border = "2px solid rgb(208, 25, 25)"
            numeroDeErros = numeroDeErros + 1
            main.style.border = "2px solid rgb(208, 25, 25)"
            start()
        }
    }, 200);
}

function mostrarNumero_3() {

    setTimeout(() => {
        if (randomNumber3 == Number(arr_area[3].textContent)) {
            setTimeout(() => {
                arr_area[3].style.color = "white"
                arr_area[3].style.border = "2px solid rgb(77, 179, 30)"
                numeroDeAcertos = numeroDeAcertos + 1
                main.style.border = "2px solid rgb(77, 179, 30)"
                start()
            }, 200);

        } else {
            arr_area[3].style.color = "white"
            arr_area[3].style.border = "2px solid rgb(208, 25, 25)"
            numeroDeErros = numeroDeErros + 1
            main.style.border = "2px solid rgb(208, 25, 25)"
            start()
        }
    }, 200);
}

function mostrarNumero_4() {

    setTimeout(() => {
        if (randomNumber3 == Number(arr_area[4].textContent)) {
            setTimeout(() => {
                arr_area[4].style.color = "white"
                arr_area[4].style.border = "2px solid rgb(77, 179, 30)"
                numeroDeAcertos = numeroDeAcertos + 1
                main.style.border = "2px solid rgb(77, 179, 30)"
                start()
            }, 200);

        } else {
            arr_area[4].style.color = "white"
            arr_area[4].style.border = "2px solid rgb(208, 25, 25)"
            numeroDeErros = numeroDeErros + 1
            main.style.border = "2px solid rgb(208, 25, 25)"
            start()
        }
    }, 200);
}

function mostrarNumero_5() {

    setTimeout(() => {
        if (randomNumber3 == Number(arr_area[5].textContent)) {
            setTimeout(() => {
                arr_area[5].style.color = "white"
                arr_area[5].style.border = "2px solid rgb(77, 179, 30)"
                numeroDeAcertos = numeroDeAcertos + 1
                main.style.border = "2px solid rgb(77, 179, 30)"
                start()
            }, 200);

        } else {
            arr_area[5].style.color = "white"
            arr_area[5].style.border = "2px solid rgb(208, 25, 25)"
            numeroDeErros = numeroDeErros + 1
            main.style.border = "2px solid rgb(208, 25, 25)"
            start()
        }
    }, 200);
}
