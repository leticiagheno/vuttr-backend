class Route { 
    routes(app: any){
        app.route('/').get((req,res) => {
            res.send({ versao : '0.0.1'})
        })
    }
}

export { Route };