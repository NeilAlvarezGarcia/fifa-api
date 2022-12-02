import connectDB from "../db/index.js";

const initApp = async (app) => {
    try {
        await connectDB(); 

        app.listen(app.get('port'), () => {
            console.log('App is running successfuly')
        });
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

export default initApp;