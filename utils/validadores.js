const validarNome = (nome) => {
 return nome?.toString().length > 2;
}

const validarEmail = (email) => {
  const emailString = email?.toString();
  return emailString.length > 6 && emailString.includes('@') && emailString.includes('.');
}

const validarSenha = (senha) => {
  const senhaString = senha?.toString();
  return senhaString.length > 6;
}

const validarConfirmacaoSenha = (senha, confirmacaoSenha) => {
  return validarSenha(senha) && senha === confirmacaoSenha;
}

export {
  validarNome,
  validarEmail,
  validarSenha,
  validarConfirmacaoSenha
}