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
    if(req.body.length === 0) {
        return res.status(501).json({ message: 'No votes to add' });
    } else {
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
            return res.status(201).json({ message: 'Results are added' });
        } catch (error) {
            console.error(error); // Log the full error
            return res.status(500).send(error.message);
        }
    }
};

export const updatedVote = async (req, res) => {
    let [rows,] = await connection.query('select Tulemuse_id from TULEMUSEDs;')
    const { id } = req.params;
    const voteExists = rows.some(row => row.Tulemuse_id === parseInt(id));
    if (voteExists) {
        const { Haalte_arv, Haal_poolt, Haal_vastu } = req.body;
        try {
            const updatedVote = await TULEMUSED.update({
                Haalte_arv: Haalte_arv,
                Haal_poolt: Haal_poolt,
                Haal_vastu: Haal_vastu
            }, {
                where: { Tulemuse_id: id }
            });
            console.log(updatedVote);
            return res.status(202).json({ message: 'Results are updated' });
        } catch (error) {
            console.error(error); // Log the full error
            return res.status(500).send(error.message);
        }
    } else {
        return res.status(502).json({ message: 'Vote not found' });
    }
}

export const deleteVote = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedVote = await TULEMUSED.destroy({
            where: { Tulemuse_id: id }
        });
        if (deletedVote) {
            return res.status(203).json({ message: 'Vote deleted successfully' });
        } else {
            return res.status(503).json({ message: 'Vote not found' });
        }
    } catch (error) {
        console.error(error); // Log the full error
        return res.status(500).send(error.message);
    }
};