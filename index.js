const fs = require('fs')

class DB {

constructor(){



}





set(veri, değer){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] = değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 1))
}

fetch(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[veri]) throw new TypeError('Yazdığınız Veri Bulunamadı\n' + __dirname)
    return dosya[veri]
}
get(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[veri]) throw new TypeError('Yazdığınız Veri Bulunamadı\n' + __dirname)
    return dosya[veri]
}
has(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[veri] ? true : false

}
delete(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[veri]) throw new TypeError('Yazdığınız Veri Bulunamadı\n' + __dirname)
    delete dosya[veri]
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
}
}



module.exports = new DB