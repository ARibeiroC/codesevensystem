import mongoose from "mongoose";

const Candidate = mongoose.model('Candidate', {
    registerCandidate: String,
    nameComplete: String,
    emailCandidate: String,
    telephoneCandidate: String,
    nameResponsible: String,
    cellphoneResponsible: String,
    passwordCandidate: String,
})

export default Candidate