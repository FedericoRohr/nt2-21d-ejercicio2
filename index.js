new Vue({
    el: '#app',
    data: {
        criterioDeBusquedaNombre: '',
        criterioDeBusquedaDni: '',
        //Aquí, en este array es donde tienen que agregar su información
        personas: [
            {
                nombre: "Daniel",
                apellido: "Sanchez",
                correo: "danielsanchez68@hotmail.com",
                dni: "20442873"
            },
            {
                nombre: "Federico",
                apellido: "Rohr",
                correo: "rohrfede@gmail.com",
                dni: "41916580"
            },
        ]

    },
    computed: {
        personasFiltradas() {
            return this.getPersonasFiltradasDni(this.getPersonasFiltradasNombre(this.personas));
        }
    },
    methods: {
        getNombreCompleto(persona) {
            return `${persona.nombre} ${persona.apellido}`
        },
        getPersonasFiltradasNombre(lista){
            let filtradasNombre= [...lista];
                filtradasNombre = lista.filter((persona) => {
                let registroCompleto = `${persona.nombre} ${persona.apellido}`
                return registroCompleto.toLowerCase().includes(this.criterioDeBusquedaNombre.toLowerCase())
            });         
           return filtradasNombre;
        },
        getPersonasFiltradasDni(lista){
            let filtradasDni= [...lista];
            filtradasDni = lista.filter((persona) => {
                let registroCompleto = `${persona.dni}`
                return registroCompleto.toLowerCase().includes(this.criterioDeBusquedaDni.toLowerCase())
            });
            return filtradasDni;
        },
        isValid(string){
            return string.length==0 || string.length>2;
        }
    }
});