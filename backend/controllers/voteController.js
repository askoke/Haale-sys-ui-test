// controllers such as getVotes and sendVotes
import TULEMUSED from '../models/models.js';
import connection from '../utils/db.js';

export const getVotes = async (req, res) => {
    await connection.query('select * from HAALETUS;')
    .then(votes => {
        console.log(votes);
        return res.status(200).json({ votes });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
};

export const sendVotes = async (req, res) => {
    const votes = req.body;
    let Haalte_arv = votes.length;
    let Haal_poolt = 0;
    let Haal_vastu = 0;
    
    for (let i = 0; i < Haalte_arv; i++) {
        if (votes[i] === "For") {
            Haal_poolt += 1;
        } else {
            Haal_vastu += 1;
        }
    }
    
    try {
        const Tulemus = await TULEMUSED.create({
            Haalte_arv: Haalte_arv,
            Haal_poolt: Haal_poolt,
            Haal_vastu: Haal_vastu,
            H_Aeg: new Date()
        });
        console.log(Tulemus);
        return res.status(200).json({ message: 'Results are added' });
    } catch (error) {
        console.error(error); // Log the full error
        return res.status(500).send(error.message);
    }
};