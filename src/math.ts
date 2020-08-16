
// noinspection SpellCheckingInspection
interface Math {

    /**
     *  Return random integers from the "discrete uniform" distribution of
     *  the specified dtype in the "half-open" interval [`low`, `high`).
     *  If`high` is None (the default), then results are from [0, `low`).
     * @param low
     * @param high
     * @return Return random integers from `min` (inclusive) to `max` (exclusive).
     */
    randint(low: number, high?: number): number;
}


// noinspection SpellCheckingInspection
Math.randint = function (low: number, high?: number) {
    if (high) {
        return Math.floor(Math.random() * (high - low) ) + low;
    }
    return  Math.floor(Math.random() * (low - 1));
}

