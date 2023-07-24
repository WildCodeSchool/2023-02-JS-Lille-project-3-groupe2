// const ValidateUser = (req, res, next) => {
//   const {
//     lastname,
//     firstname,
//     birthdate,
//     streetNumber,
//     streetType,
//     streetName,
//     city,
//     postalCode,
//     department,
//     region,
//     country,
//     registerEmail,
//     phoneNumber,
//     about,
//     pictureUrl,
//   } = req.body;

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//   const phoneRegex = /^\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}$/;

//   const errors = [];

//   if (lastname == null) {
//     errors.push({ field: "lastname", message: "this field is required" });
//   } else if (lastname.length >= 50) {
//     errors.push({
//       field: "lastname",
//       message: "Should contain less than 50 characters",
//     });
//   }
//   if (firstname == null) {
//     errors.push({ field: "firstname", message: "this field is required" });
//   } else if (firstname.length >= 100) {
//     errors.push({
//       field: "firstname",
//       message: "Should contain less than 100 characters",
//     });
//   }

//   if (birthdate == null) {
//     errors.push({ field: "birthdate", message: "this field is required" });
//   }

//   if (streetNumber == null) {
//     errors.push({ field: "StreetNumber", message: "this field is required" });
//   } else if (streetNumber.length >= 10) {
//     errors.push({
//       field: "StreetNumber",
//       message: "Should contain less than 10 characters",
//     });
//   }

//   if (streetType == null) {
//     errors.push({ field: "streetType", message: "this field is required" });
//   } else if (streetType.length >= 255) {
//     errors.push({
//       field: "streetType",
//       message: "Should contain less than 50 characters",
//     });
//   }

//   if (streetName == null) {
//     errors.push({ field: "streetName", message: "this field is required" });
//   } else if (streetName.length >= 100) {
//     errors.push({
//       field: "streetName",
//       message: "Should contain less than 100 characters",
//     });
//   }

//   if (city == null) {
//     errors.push({ field: "city", message: "this field is required" });
//   } else if (city.length >= 100) {
//     errors.push({
//       field: "city",
//       message: "Should contain less than 100 characters",
//     });
//   }

//   if (postalCode == null) {
//     errors.push({ field: "postalCode", message: "this field is required" });
//   } else if (postalCode.length >= 10) {
//     errors.push({
//       field: "postalCode",
//       message: "Should contain less than 10 characters",
//     });
//   }

//   if (department == null) {
//     errors.push({ field: "department", message: "this field is required" });
//   } else if (department.length >= 100) {
//     errors.push({
//       field: "department",
//       message: "Should contain less than 100 characters",
//     });
//   }

//   if (region == null) {
//     errors.push({ field: "region", message: "this field is required" });
//   } else if (region.length >= 100) {
//     errors.push({
//       field: "region",
//       message: "Should contain less than 100 characters",
//     });
//   }

//   if (country == null) {
//     errors.push({ field: "country", message: "this field is required" });
//   } else if (country.length >= 20) {
//     errors.push({
//       field: "country",
//       message: "Should contain less than 20 characters",
//     });
//   }

//   if (!emailRegex.test(registerEmail)) {
//     errors.push({ field: "email", message: "Invalid email" });
//   } else if (registerEmail == null) {
//     errors.push({ field: "email", message: "this field is required" });
//   }

//   if (phoneNumber == null) {
//     errors.push({ field: "phoneNumber", message: "this field is required" });
//   } else if (!phoneRegex.test(phoneNumber)) {
//     errors.push({
//       field: "phoneNumber",
//       message: "it's no the good syntaxe, try xx.xx.xx.xx.xx",
//     });
//   }

//   if (about == null) {
//     errors.push({ field: "about", message: "this field is required" });
//   }

//   if (pictureUrl == null) {
//     errors.push({ field: "pictureUrl", message: "this field is required" });
//   } else if (pictureUrl.length >= 100) {
//     errors.push({
//       field: "PictureUrl",
//       message: "Should contain less than 100 characters",
//     });
//   }

//   if (errors.length) {
//     res.status(422).json({ validationErrors: errors });
//   } else {
//     next();
//   }
// };

// module.exports = { ValidateUser };
