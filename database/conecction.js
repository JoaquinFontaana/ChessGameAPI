import Mongoose from 'mongoose';

const connect = async (retrys = 5) => {
    try {
        await Mongoose.connect();
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to database');
        console.log('Retrying in 5 seconds');
        if (retrys > 0) {
            setTimeout(() => {
                connect(retrys - 1);
            }, 5000);
        }
        else {
            console.log('Max retries reached');
        }
    }
}
export default connect;