module.exports = (mongoose) => {
    const Schema = mongoose.Schema;    

    const userSchema = new Schema({
        username: {
            type: String
        },
        email: String,
        password: {
            type: String,
            minLength: 6
        },
        date: {
            type: Date,
            default: Date.now
        },
        admin: {
            type: Boolean,
            default: false
        }
    });

    const User = mongoose.model("User", userSchema);

    return User;
};