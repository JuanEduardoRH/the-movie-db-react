const config = () => {

    const enviroment = import.meta.env;

    return {
        pathImg: enviroment.VITE_KEY_PATH_IMG,
        apiUrl: enviroment.VITE_KEY_API_URL,
        keyMdb: enviroment.VITE_KEY_MDB,
        tokenMdb: enviroment.VITE_TOKEN_MDB,
    }
}

export default config();