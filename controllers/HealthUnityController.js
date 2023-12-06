import HealthUnity from "../models/HealthUnity.js"

const getPagination = (page, size) => {
    const limit = size ? +size : 30; //tamanho padrao: 30 registros
    const offset = page ? (page - 1) * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows } = data;
    const currentPage = page ? +page : 1;

    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, rows, totalPages, currentPage };
};

export const getAllHealthUnities = async (req, res) => {
    try {
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);

        const unities = await HealthUnity.findAndCountAll({
            attributes: ["uf", "cidade", "nome", "endereco", "bairro"],
            limit,
            offset
        });

        const response = getPagingData(unities, page, limit);

        return res.render('pagination', {unities: response.rows, totalPages: response.totalPages, totalItems: response.totalItems, currentPage: response.currentPage})
    } catch (error) {
        console.error(error)
    }
}

export const getAllCities = async (req, res) => {
    try {
        const cities = await HealthUnity.findAll({
            attributes: ['cidade', 'uf'],
            group: ['cidade', 'uf']
        });

        function toNormalForm(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        const citiesSorted = cities.sort((a, b) => toNormalForm(a.cidade) < toNormalForm(b.cidade) ? -1 : toNormalForm(a.cidade) > toNormalForm(b.cidade) ? 1 : 0)
        return res.render('cities', { cities: citiesSorted })
    } catch (error) {
        console.error(error)
    }
}

export const getUnitiesByCity = async (req, res) => {
    try {
        const { city } = req.query;
        console.log(city)

        const unities = await HealthUnity.findAll({
            where: {
                cidade: city
            },
            attributes: ["uf", "cidade", "nome", "endereco", "bairro"]
        });

        return res.render('listUnities', { unities: unities, city: city })
    } catch (error) {
        console.error(error)
    }
}