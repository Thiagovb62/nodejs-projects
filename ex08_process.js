function temparam(param){

  return process.argv.indexOf(param) !== -1
}

if(temparam('--producao')){
  console.log('Atençao total');
}else{
  console.log('tranquilo!!!')
}
