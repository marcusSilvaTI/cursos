class NegociacaoController {
    constructor() {
        //Diz que o query selector mantem sua associacao com document
        let $querySelector = document.querySelector.bind(document);

        this._inputData = $querySelector('#data');
        this._inputQuantidade = $querySelector('#quantidade');
        this._inputValor = $querySelector('#valor');
        this._volume = 0;

        let self = this;

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            // set: function(target, prop, value, receiver) {
            //     console.log(`Valor anterior: ${target[prop]} Valor novo"${value}"`);
            //     return Reflect.get(target, prop, value, receiver);
            // }
            // get: function(target, prop, receiver) {
            //     console.log(`"${prop}" interceptada`);
            //     return Reflect.get(target, prop, receiver);
            // }
            get: function(target, prop, receiver) {              
                if (['adicionaNegociacao', 'esvazia'].includes(prop) && typeof(target[prop]) === typeof(Function)) {
                    return function() {
                        console.log(`"${prop}" interceptada`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });

        this._negociacoesView = new NegociacoesView($querySelector('#negociacoesView'));
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($querySelector('#mensagemView'));
    }
    adiciona(event) {
        event.preventDefault(); //Não recarrega página novamente
        this._listaNegociacoes.adicionaNegociacao(this._criarNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        this._limparFormulario();

    }

    apaga() {
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociações apagadas com sucesso!";
        this._mensagemView.update(this._mensagem);
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}
