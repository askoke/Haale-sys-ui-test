import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('mysql://askoita22_haale_admin:qwertyqwertyqwerty@localhost:3306/askoita22_haaletamine_AB');

const TULEMUSED = sequelize.define('TULEMUSED', {
    Tulemuse_id: {
        type: DataTypes.INTEGER,    
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Haalte_arv: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Haal_poolt: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Haal_vastu: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
});

export default TULEMUSED;