module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: Number,
                required: true,
            },
            marks: {
                type: Number,
                required: true,
            },
            result: {
                type: String,
                required: true,
            },
        }
    );
    schema.method('toJSON', function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    })
    const Student = mongoose.model('student', schema);
    return Student;
}