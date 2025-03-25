import bcrypt from "bcryptjs";
const saltRounds = 10;

export const hashPassword = (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds,
        function (err, hash) {
            req.hashPassword = hash;
            console.log("Hashed Password: ", req.hashPassword);
            next();
        }
    );
};