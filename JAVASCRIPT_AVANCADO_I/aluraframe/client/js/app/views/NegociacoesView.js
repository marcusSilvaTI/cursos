class NegociacoesView {
    constructor(elemento) {

        this._elemento = elemento;
    }
    _template(model) {
            return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
          ${model._negociacoes.map((n) => `
            <tr>
              <td>${DateHelper.dataParaTexto(n._data)} </td>
              <td>${n._quantidade}</td>
              <td>${n._valor}</td>
              <td>${n._volume}</td>
           </tr>`).join('')}

        </tbody>
        <tfoot>
        </tfoot>
    </table>`
  }
  update(elemento){
    this._elemento.innerHTML = this._template(elemento);
  }
}
