import Votacion from "../models/Votacion.js";

export const obtenerVotaciones = async(req,res) => {
   
    try {

        const votos = await Votacion.countDocuments();
        res.render('main.ejs',{votos})

        
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal al intentar obtener los votos'
        })
    }

}

export const obtenerVotacionMa = async(req,res) => {
    try {

        const vote = await Votacion.countDocuments({'candidato':'Maria Corina'});
        res.json(vote);
        
    } catch (error) {
        return res.status(500).json({
            msg:'Algo salio mal'
        });
    }
}

export const obtenerVotacionCa = async(req,res) => {
    try {

        const vote = await Votacion.countDocuments({'candidato': 'Capriles Radonski'});

        res.json(vote);
        
    } catch (error) {
        return res.status(500).json({
            msg:'Algo salio mal'
        });
    }
}

export const obtenerVotacionEl = async(req,res) => {
    try {

        const vote = await Votacion.countDocuments({'candidato': 'Benjamin Rausseo'});

        res.json(vote);
        
        
    } catch (error) {
        return res.status(500).json({
            msg:'Algo salio mal'
        });
    }
}

export const obtenerVotacionGu = async(req,res) => {
    try {

        const vote = await Votacion.countDocuments({'candidato': 'Juan Guido'});

        res.json(vote);
        
    } catch (error) {
        return res.status(500).json({
            msg:'Algo salio mal'
        });
    }
}

export const crearVotacion = async(req,res) => {
    try {

        const {nombre, apellido, candidato, correo} = req.body;
        const newVote = new Votacion({nombre,apellido,candidato,correo});

        const vote = await newVote.save();

        res.redirect('/')

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal al intentar escribir el voto'
        })
    }
}

