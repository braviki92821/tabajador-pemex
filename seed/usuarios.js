import bcrypt from 'bcrypt'

const usuarios = [
    {
        ficha: 50654,
        nombre: 'BRITNEY MICHELLE MARTINEZ RAMOS',
        correo: '196P0714@itspozarica.edu.mx',
        perfil: 'foto.jpeg',
        categoria: '',
        password: bcrypt.hashSync('password',10),
        nivel: 1
    }
]

export default usuarios