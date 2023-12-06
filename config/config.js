export const config = {
    app: {
        port: process.env.PORT
    },
    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
}