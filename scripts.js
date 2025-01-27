tarefas = [];
mostrarOpcaoLimpar = false;

const nomeLocalStorage = "tarefas";

const listaDeTarefas =  {
    data() {

        return {
            tarefas: window.tarefas,
            mostrarOpcaoLimpar: window.mostrarOpcaoLimpar
        }

    },
    methods: {
        adicionarTarefa: function() {

            if(this.novaTarefa){

                let novaTarefa = {
                    nomeTarefa: this.novaTarefa,
                    status: false,
                    dataHoraAdicionada: new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
                }

                this.tarefas.push(novaTarefa);

                this.setTarefas();

                this.novaTarefa = null;
            }

        },

        limpar: function() {
            this.tarefas.length = 0;
            localStorage.removeItem(nomeLocalStorage);
        },

        existemTarefasNaLista: function() {
            return this.tarefas.length > 0;
        },

        setTarefas() {
            localStorage.setItem(nomeLocalStorage, JSON.stringify(this.tarefas))
        }

    },
    
    /* Lifecycle Hooks */

    created() {
        const getTarefasArmazenadas = localStorage.getItem(nomeLocalStorage);

        this.tarefas = getTarefasArmazenadas ? JSON.parse(getTarefasArmazenadas) : this.tarefas;

        this.mostrarOpcaoLimpar = this.existemTarefasNaLista();
    },

    updated() {
        this.mostrarOpcaoLimpar = this.existemTarefasNaLista();
        
        this.setTarefas();
    }

}

const id = "#app";

Vue.createApp(listaDeTarefas).mount(id);