module.exports = {
    async divide(req, res) {
        const { number } = req.body;

        //CALCULO PARA ENCONTRAR O DIVISOR

        const isPrime = true;

        const dividers = [];

        return res.json({ isPrime: isPrime, dividers: dividers });
    }
}