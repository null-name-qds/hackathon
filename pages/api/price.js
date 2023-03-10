import axios from 'axios';

export default async function handler(req, res) {
    const query = req.query;
    const { min, max, bed, bath, type, salary} = query;
    const { data } = await axios({
        method: 'get',
        url: 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential',
        headers: {
            'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
        },
        params: {
            'RecordsPerPage': 25,
            'LatitudeMax': 49.267941,
            'LatitudeMin': 49.243,
            'LongitudeMax': -123.02356,
            'LongitudeMin': -123.24736,
            'PriceMin': min,
            'PriceMax': max,
            'BedRange': bed,
            'BathRange': bath,
            'BuildingTypeId': type,
        },
    })
    const results = data.Results;

    res.status(200).json(results);
}