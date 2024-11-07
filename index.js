import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Candidate from './models/candidate.js'
import { app } from './connection.js'

const port = process.env.PORT
const server = process.env.SERVER

mongoose.connect(server)
app.use(express.json())
app.use(cors('http://localhost:51734/'))


app.get('/', (req, res)=>{
    res.send({"msg":"Deploy funcionando"})
})

app.post('/candidates', async (req, res)=>{
    const candidate = new Candidate({
        registerCandidate: req.body.registerCandidate,
        nameComplete: req.body.nameComplete,
        emailCandidate: req.body.emailCandidate,
        telephoneCandidate: req.body.telephoneCandidate,
        nameResponsible: req.body.nameResponsible,
        cellphoneResponsible: req.body.cellphoneResponsible,
        passwordCandidate: req.body.passwordCandidate,
    })

    await candidate.save()
    res.send(candidate)
})

app.get('/candidates', async (req, res)=>{
    const candidate = await Candidate.find()
    res.send(candidate)
})

const responseServer = ()=>{
    console.log(`Servidor no ar em http://localhost:${port}`)
}

app.listen(port, responseServer)