trocaTema = () => {
    //    const html = document.documentElement
    
        // document.querySelector("body").style.background = ""
    
        document.documentElement.classList.toggle("light")
    
        const isLight = document.documentElement.classList.contains("light")
    
        const imagem = isLight ? "./img/PerfilDark.png" : "./img/PerfilLight.png";
    
        document.querySelector("#perfil img").setAttribute("src", imagem)
    
        const trocarAlt = isLight ? "Imagem de Perfil do tema Light" : "Imagem de Perfil do tema Dark";
    
        document.querySelector("#perfil img").setAttribute("alt", trocarAlt)
    
    };
    