const config = () => {

    const enviroment = import.meta.env;

    return {
        keyMdb: enviroment.VITE_KEY_MDB,
        tokenMdb: enviroment.VITE_TOKEN_MDB,
    }
}

export default config();