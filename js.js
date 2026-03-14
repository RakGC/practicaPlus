const formulario = document.querySelector("#formulario");
        const mensajes = document.querySelector("#mensajes");

        if (formulario){
            formulario.addEventListener("submit",function(event){
            event.preventDefault();

            const nameValue = document.querySelector("#nombre").value.trim();
            const surnameValue = document.querySelector("#apellidos").value.trim();
            const emailValue = document.querySelector("#email").value.trim();
            const checkConditions = document.querySelector("#condiciones").checked; 
            const errTimer = 2000;

            let errores = [];

            mensajes.innerHTML = "";
            mensajes.className = "mensajes";

            if (nameValue.length < 3){
                errores.push("Nombre inválido, debe tener al menos tres caracteres.")
            };

            if (surnameValue.length < 3){
                errores.push("Apellidos inválidos, deben tener al menos 3 caracteres.")
            };

            if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".")===-1 || emailValue.lastIndexOf(".")< emailValue.indexOf("@")){ //si el @ no está, o no está el . o si el . esta antes del @, da error
                errores.push("Email inválido, por favor, utiliza \"@.\" adecuadamente.")
            }

            if (!checkConditions){
                errores.push("Debes aceptar las condiciones.")
            };

            if (errores.length > 0){
                mensajes.className = "mensajes err";
                mensajes.innerHTML = errores.join("<br>");
                setTimeout (()=>{
                    mensajes.innerHTML="";
                    mensajes.className="mensajes";
            },errTimer);
            }else {
                mensajes.className = "mensajes ok";
                mensajes.innerHTML = "¡Gracias por interesarte!"
                formulario.reset();
            };

            });
