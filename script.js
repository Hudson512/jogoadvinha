
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



//Adicionando eleventos as Tags HTML
btnComecarJogo.addEventListener('click', start)





function start() {
    //Declaração de variaveis locais
    const procurarO = document.querySelector(".procura")
    let arr = []
    let randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    const acertos = document.querySelector("#acertos")
    const erros = document.querySelector("#erros")

    let area_nivel = document.querySelector(".area_nivel")
    let area_1 = document.querySelector("#area_1")
    let area_2 = document.querySelector("#area_3")
    let area_3 = document.querySelector("#area_5")

    const nivel_1 = document.querySelector("#nivel1").checked
    const nivel_2 = document.querySelector("#nivel2").checked
    const nivel_3 = document.querySelector("#nivel3").checked


    //Escolha de nível de dificuldade

    if (nivel_1) {
        area_1.style.color = "rgba(255, 255, 255, 0.05)"
        area_2.style.color = "rgba(255, 255, 255, 0.05)"
        area_3.style.color = "rgba(255, 255, 255, 0.05)"
        
    }else if (nivel_2) {
        area_3.style.color = "rgba(255, 255, 255, 0.05)"
        
    }else if (nivel_3) {
        
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

    arr.forEach(function (e, i) {
        arr_area[i].innerHTML = e
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    });




    if (numeroDeAcertos >= 10) {
        setTimeout(() => {
            if (confirm("🙂 VOCÊ VENCEU, DESEJA JOGAR NOVAMENTE?")) {
                window.location.reload()
            }
        }, 500);

    } else {
        setTimeout(() => {
            procurarO.innerHTML = "Encontre onde está o número " + randomNumber2

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
            }, 500);

        }, 200);
    }


    if (numeroDeErros >= 10) {
        setTimeout(() => {
            if (confirm("😥 VOCÊ PERDEU, DESEJA JOGAR NOVAMENTE?")) {
                window.location.reload()
            }
        }, 500);

    }

}



function mostrarNumero_0() {
    arr_area[0].style.backgroundColor = "wheat";
    arr_area[0].style.border = "2px solid black"

    for (let i = 0; i < arr_area.length; i++) {
        if (i === 0) {
            continue
        }
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    }

    setTimeout(() => {
        if (randomNumber3 === Number(arr_area[0].textContent)) {
            setTimeout(() => {
                numeroDeAcertos = numeroDeAcertos + 1
                start()
            }, 200);

        } else {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.border = "2px solid white"
            }
            numeroDeErros = numeroDeErros + 1
            start()
        }
    }, 500);


}

function mostrarNumero_1() {
    arr_area[1].style.backgroundColor = "wheat"
    arr_area[1].style.border = "2px solid black"

    for (let i = 0; i < arr_area.length; i++) {
        if (i === 1) {
            continue
        }
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    }

    setTimeout(() => {
        if (randomNumber3 === Number(arr_area[1].textContent)) {
            setTimeout(() => {
                numeroDeAcertos = numeroDeAcertos + 1
                start()
            }, 200);

        } else {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.border = "2px solid white"
            }
            numeroDeErros = numeroDeErros + 1
            start()
        }
    }, 500);
}

function mostrarNumero_2() {
    arr_area[2].style.backgroundColor = "wheat"
    arr_area[2].style.border = "2px solid black"

    for (let i = 0; i < arr_area.length; i++) {
        if (i === 2) {
            continue
        }
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    }

    setTimeout(() => {
        if (randomNumber3 === Number(arr_area[2].textContent)) {
            setTimeout(() => {
                numeroDeAcertos = numeroDeAcertos + 1
                start()
            }, 200);

        } else {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.border = "2px solid white"
            }
            numeroDeErros = numeroDeErros + 1
            start()
        }
    }, 500);
}

function mostrarNumero_3() {
    arr_area[3].style.backgroundColor = "wheat"
    arr_area[3].style.border = "2px solid black"

    for (let i = 0; i < arr_area.length; i++) {
        if (i === 3) {
            continue
        }
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    }

    setTimeout(() => {
        if (randomNumber3 === Number(arr_area[3].textContent)) {
            setTimeout(() => {
                numeroDeAcertos = numeroDeAcertos + 1
                start()
            }, 200);

        } else {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.border = "2px solid white"
            }
            numeroDeErros = numeroDeErros + 1
            start()
        }
    }, 500);
}

function mostrarNumero_4() {
    arr_area[4].style.backgroundColor = "wheat"
    arr_area[4].style.border = "2px solid black"

    for (let i = 0; i < arr_area.length; i++) {
        if (i === 4) {
            continue
        }
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    }

    setTimeout(() => {
        if (randomNumber3 === Number(arr_area[4].textContent)) {
            setTimeout(() => {
                numeroDeAcertos = numeroDeAcertos + 1
                start()
            }, 200);

        } else {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.border = "2px solid white"
            }
            numeroDeErros = numeroDeErros + 1
            start()
        }
    }, 500);
}

function mostrarNumero_5() {
    arr_area[5].style.backgroundColor = "wheat"
    arr_area[5].style.border = "2px solid black"

    for (let i = 0; i < arr_area.length; i++) {
        if (i === 5) {
            continue
        }
        arr_area[i].style.backgroundColor = "black"
        arr_area[i].style.border = "2px solid white"
    }

    setTimeout(() => {
        if (randomNumber3 === Number(arr_area[5].textContent)) {
            setTimeout(() => {
                numeroDeAcertos = numeroDeAcertos + 1
                start()
            }, 200);

        } else {
            for (let i = 0; i < arr_area.length; i++) {
                arr_area[i].style.backgroundColor = "black"
                arr_area[i].style.border = "2px solid white"
            }
            numeroDeErros = numeroDeErros + 1
            start()
        }
    }, 500);
}
