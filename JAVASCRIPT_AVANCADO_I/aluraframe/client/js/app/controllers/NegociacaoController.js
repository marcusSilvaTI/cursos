class NegociacaoController {
    constructor() {
        //Diz que o query selector mantem sua associacao com document
        let $querySelector = document.querySelector.bind(document);

        this._inputData = $querySelector('#data');
        this._inputQuantidade = $querySelector('#quantidade');
        this._inputValor = $querySelector('#valor');
        this._volume = 0;
        this._listaNegociacoes = new ListaNegociacoesController();
        this._negociacoesView = new NegociacoesView($querySelector('#negociacoesView'));
    }
    adiciona(event) {
        event.preventDefault(); //Não recarrega página novamente

        this._listaNegociacoes.adicionaNegociacao(this._criarNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        console.log(this._listaNegociacoes.getNegociacoes);
        this._limparFormulario();

    }

    _criarNegociacao(){            
      return new Negociacao(
          DateHelper.textoParaData(this._inputData.value),
          this._inputQuantidade.value,
          this._inputValor.value

      );
    }


    _limparFormulario(){
      this._inputData.value = "";
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
    }
}
