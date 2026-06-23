
const {createApp,ref} = Vue;

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p> {{author}}</p>
    // `,
    setup(){ //setup es una funcion que se ejecuta al iniciar la app
        const message = ref("I'm Batman"); //ref permite crear una variable reactiva
        const author = ref("Bruce Wayne");

        const changeMessage = () => {
            message.value = "I'm Ironman";
            author.value = "Tony Stark";
        }

        // setTimeout(() => {
        //     message.value = "I'm Ironman";
        //     author.value = "Tony Stark";
        //     console.log("Ejecutado");
        // }, 1000);

        return {message, author,changeMessage}; //retornamos las variables para usarlas en el template
    }

});

//Para cargar el app desde un id
app.mount('#myApp');