
function validateCreateContact(data) {
    console.log(`Validating Data: ${data}`);

    if (data.firstName == null || data.lastName == null || data.email == null || data.favoriteColor == null || data.birthday == null) {
        return false
    }

    return true
}

function validateUpdateContact(data) {
  console.log("Validating Update Data:", data);

  const allowedFields = ["firstName", "lastName", "email", "favoriteColor", "birthday"];
  const updateData = {};

  for (const field of allowedFields) {
    if (data[field] !== undefined && data[field] !== null && data[field] !== "") {
      updateData[field] = data[field];
    }
  }

  // if no valid fields were provided, fail validation
  if (Object.keys(updateData).length === 0) {
    return null;
  }

  return updateData;
}

module.exports = { validateCreateContact, validateUpdateContact };


