const ValidateUser = (req, res, next) => {
  const {
    lastname,
    firstname,
    birthdate,
    streetNumber,
    streetType,
    streetName,
    city,
    postalCode,
    department,
    region,
    country,
    email,
    phoneNumber,
    about,
    pictureUrl,
  } = req.body;

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  const errors = [];

  if (lastname == null) {
    errors.push({ field: "lastname", message: "this field is required" });
  }

  if (firstname == null) {
    errors.push({ field: "firstname", message: "this field is required" });
  }

  if (birthdate == null) {
    errors.push({ field: "birthdate", message: "this field is required" });
  }

  if (streetNumber == null) {
    errors.push({ field: "StreetNumber", message: "this field is required" });
  }

  if (streetType == null) {
    errors.push({ field: "streetType", message: "this field is required" });
  }

  if (streetName == null) {
    errors.push({ field: "streetName", message: "this field is required" });
  }

  if (city == null) {
    errors.push({ field: "city", message: "this field is required" });
  }

  if (postalCode == null) {
    errors.push({ field: "postalCode", message: "this field is required" });
  }

  if (department == null) {
    errors.push({ field: "departement", message: "this field is required" });
  }

  if (region == null) {
    errors.push({ field: "region", message: "this field is required" });
  }

  if (country == null) {
    errors.push({ field: "country", message: "this field is required" });
  }

  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }

  if (phoneNumber == null) {
    errors.push({ field: "phoneNumber", message: "this field is required" });
  }

  if (about == null) {
    errors.push({ field: "about", message: "this field is required" });
  }

  if (pictureUrl == null) {
    errors.push({ field: "pictureUrl", message: "this field is required" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = { ValidateUser };
