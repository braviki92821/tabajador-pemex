import path from 'path'

export default{
    mode:'development',
    entry:{
        sidebar: './src/js/sidebar.js',
        busqueda: './src/js/busqueda.js',
    },
    output:{
        filename:'[name].js',
        path: path.resolve('public/js')
    }
}