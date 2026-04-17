// Funções de retorno podem retornar objetos
// Chamamos isso de 'Função Construtora'
// Isso permite criarmos várias instâncias
// do mesmo objeto de forma dinâmica!

function fabricarCarro(marca, modelo, montadora, motor){
    return {
        marca: marca,
        modelo:  modelo,
        montadora: montadora,
        motor: motor

    }
}
 const carro02 = {
    marca: 'BMW',
    modelo: 'M4 g80',
    montadora: 'BMW S.A',
    motor: 'v8 6.0'

 }
      
 
const camaro = fabricarCarro("Chevrolet", "Camaro 600 cv", "Chev-Brazil", "v8 biturbo")
const bmw = fabricarCarro(carro02.marca, carro02.modelo, carro02.montadora, carro02.motor)
console.log(camaro)
console.log(bmw)