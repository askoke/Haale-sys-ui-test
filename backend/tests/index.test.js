import request from 'supertest';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import voteRoutes from '../routes/votes.js';

const corsOptions = { origin: 'http://localhost:3000' };

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/votes', voteRoutes);

describe('Backend Server', () => {
    // GET request tests

    test('should respond with a 200 status code for the /votes route', async () => {
        await request(app).get('/votes')
        .then(res => {
            expect(res.status).toBe(200);
        });
    });

    test('should respond with a 404 status code for an unknown route', async () => {
        await request(app).get('/unknown')
        .then(res => {
            expect(res.status).toBe(404);
        });
    });

    // POST request tests

    test('should respond with a 201 status code for a valid POST request to /votes', async () => {
        const voteData = ['Against', 'For'];
        await request(app).post('/votes').send(voteData)
        .then(res => {
            expect(res.status).toBe(201);
        });
    });

    test('should respond with a 501 status code for an invalid POST request to /votes', async () => {
        const voteData = []; // Empty array
        await request(app).post('/votes').send(voteData)
        .then(res => {
            expect(res.status).toBe(501);
        });
    });

    // PUT request tests

    test('should respond with a 202 status code for a valid PUT request to /votes/:id', async () => {
        const voteData = { Haalte_arv: 4, Haal_poolt: 2, Haal_vastu: 2 };
        await request(app).put('/votes/117').send(voteData)
        .then(res => {
            expect(res.status).toBe(202);
        });
    });

    test('should respond with a 500 status code for an invalid PUT request to /votes/:id', async () => {
        const voteData = { Haalte_arv: 'test', Haal_poolt: '1', Haal_vastu: 999 }; // Missing vote field
        await request(app).put('/votes/117').send(voteData)
        .then(res => {
             expect(res.status).toBe(500);
        });
    });

    test('should respond with a 502 status code for a PUT request to a non-existent vote', async () => {
        const voteData = { id: 999, vote: 'For' };
        await request(app).put('/votes/999').send(voteData)
        .then(res => {
            expect(res.status).toBe(502);
        });
    });

    // DELETE request tests

    test('should respond with a 203 status code for a valid DELETE request to /votes/:id', async () => {
        await request(app).delete('/votes/135')
        .then(res => {
            expect(res.status).toBe(203);
        });
    });

    test('should respond with a 503 status code for a DELETE request to a non-existent vote', async () => {
        await request(app).delete('/votes/999')
        .then(res => {
            expect(res.status).toBe(503);
        });
    });

    test('should respond with a 503 status code for a DELETE request with an invalid id', async () => {
        await request(app).delete('/votes/invalid-id')
        .then(res => {
            expect(res.status).toBe(503);
        });
    });
});
