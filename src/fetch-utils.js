import request from 'superagent'

const URL = 'https://stormy-thicket-09908.herokuapp.com/';

export async function getArtworks() {
    const response = await request.get(`${URL}artworks`);
    return response.body;
}

export async function getCategories() {
    const response = await request.get(`${URL}categories`);
    return response.body;
}

export async function getPiece(id) {
    const response = await request.get(`${URL}artworks/${id}`);
    return response.body;
}

export async function createPiece(piece) {
    const response = await request.post(`${URL}artworks`)
        .send(piece);
    return response.body;
}

export async function editPiece(id, edits) {
    const response = await request.put(`${URL}artworks/${id}`)
        .send(edits);
    return response.body;
}

export async function deletePiece(id) {
    const response = await request.delete(`${URL}artworks/${id}`);
    return response.body;
}