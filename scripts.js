tarefas = [];

const listaDeTarefas =  {
    data() {

        return {
            tarefas: window.tarefas,
        }

    },
    methods: {
        adicionarTarefa: function() {

            if(this.novaTarefa){

                let novaTarefa = {
                    nomeTarefa: this.novaTarefa,
                    status: false
                }

                this.tarefas.push(novaTarefa);

                this.novaTarefa = null;
            }

        },

        limpar: function() {
            this.tarefas.length = 0;
        },

    }
}

const id = "#app";

Vue.createApp(listaDeTarefas).mount(id);