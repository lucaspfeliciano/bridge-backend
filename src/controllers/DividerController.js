module.exports = {
    async divide(req, res) {
        const { number } = req.body;

        let isPrime = false;

        const dividers = [];

        for (let index = 1; index <= number; index++) {
            if(number % index == 0) {
                dividers.push(index);
            }
        }

        if(dividers.length == 2) {
            isPrime = true;
        }

        return res.json({ number: number, isPrime: isPrime, dividers: dividers });
    }
}