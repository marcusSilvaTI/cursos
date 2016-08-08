class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
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
              <td>${DateHelper.dataParaTexto(n.Data)} </td>
              <td>${n.Quantidade}</td>
              <td>${n.Valor}</td>
              <td>${n.Volume}</td>
           </tr>`).join('')}
        </tbody>
        <tfoot>
          <td colspan="3"></td>
          <td> ${model._negociacoes.reduce(((total, n) => total + n.Volume),(0.0)) } </td>
        </tfoot>
    </table>`
  }
}
