class ListaNegociacoesController {
  constructor() {
    this._negociacoes = [];
  }

  adicionaNegociacao(negociacao){
    this._negociacoes.push(negociacao);
  }

  get getNegociacoes(){
    return [].concat(this._negociacoes);
  }

}
