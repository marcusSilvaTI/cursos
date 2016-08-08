class MensagemView extends View{

  constructor(elemento){
    super(elemento);
  }

  template(model){
    return model.texto ? `<div class="alert alert-info"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>${model.texto}</strong>` :`<strong></strong></div>`;
  }
}
