buttonContratar.onclick = function () {
    descricao.value = "";
    dataInicio.value = "";
    dataTermino.value = "";
    horarioInicio.value = "";
    horarioTermino.value = "";
    dataInicio.disabled = false;
    dataTermino.disabled = false;
    modal.style.display = "flex";
    buttonEnviar.disabled = true;
    descricao.focus();
  };
  
  buttonFechar.onclick = function () {
    modal.style.display = "none";
  };
  
  buttonEnviar.onclick = function () {
    liberaBotao;
  
    let dadosServico = {
      descricaoServico: descricao.value,
      dataInicioServico: dataInicio.value,
      dataTerminoServico: dataTermino.value,
      horarioInicioServico: horarioInicio.value,
      horarioTerminoServico: horarioTermino.value,
    };
  
    console.log(dadosServico);
  
    modal.style.display = "none";
  };
  
  let liberaBotao = function () {
    if (
      descricao.value.length > 0 &&
      dataInicio.value.length > 0 &&
      dataTermino.value.length > 0 &&
      horarioInicio.value.length > 0 &&
      horarioTermino.value.length > 0
    ) {
      buttonEnviar.disabled = false;
    } else {
      buttonEnviar.disabled = true;
    }
  };
  
  descricao.onkeyup = liberaBotao;
  dataInicio.onchange = liberaBotao;
  dataTermino.onchange = liberaBotao;
  horarioInicio.onchange = liberaBotao;
  horarioTermino.onchange = liberaBotao;
